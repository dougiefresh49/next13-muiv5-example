"use client";

import React, { memo, useMemo, useRef, useState } from "react";
import { Box, BoxProps, Skeleton } from "@mui/material";
import MuiImage, { ImageProps as MuiImageProps } from "next/image";

type ImageProps = Omit<MuiImageProps, "width" | "height"> & {
  width?: number | string;
  height?: number | string;
  ratio?: "width" | "height" | "fixed";
  sx?: BoxProps["sx"] & {
    minWidth?: number;
    minHeight?: number;
  };
  overflow?: boolean;
};

const Image = (props: ImageProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const {
    width: initWidth,
    height: initHeight,
    ratio,
    sx = {},
    overflow = true,
    ...rest
  } = props;

  const { minHeight, minWidth, ...restSx } = sx;

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [naturalRatio, setNaturalRatio] = useState<number>(1);

  const objectFit = useMemo(() => {
    return ratio === "width" || ratio === "height" ? "contain" : "initial";
  }, [ratio]);

  const [width, height] = useMemo(() => {
    const containerWidth = containerRef?.current?.clientWidth ?? 1,
      containerHeight = containerRef?.current?.clientHeight ?? 1;

    const _width =
      typeof initWidth === "string"
        ? getSizeValueFromStringValue(
            initWidth,
            containerWidth,
            minWidth,
            overflow,
          )
        : getMaxSize(containerWidth, initWidth ?? minWidth, overflow);
    const _height =
      typeof initHeight === "string"
        ? getSizeValueFromStringValue(
            initHeight,
            containerHeight,
            minHeight,
            overflow,
          )
        : getMaxSize(containerHeight, initHeight ?? minHeight, overflow);

    switch (true) {
      case Boolean(ratio === "width" && initWidth):
      case Boolean(!ratio && initWidth):
        return [_width, _width / naturalRatio];
      case Boolean(ratio === "height" && initHeight):
      case Boolean(!ratio && initHeight):
        return [naturalRatio * _height, _height];
      case ratio === "fixed":
      case Boolean(!ratio && initWidth && initHeight):
      default:
        return [_width, _height];
    }
  }, [
    initWidth,
    overflow,
    minWidth,
    initHeight,
    minHeight,
    ratio,
    naturalRatio,
  ]);

  const onLoadingComplete = (currentElement: HTMLImageElement) => {
    const { naturalWidth, naturalHeight } = currentElement;
    setNaturalRatio(naturalWidth / naturalHeight);
    setIsLoaded(true);
  };

  if (ratio === "fixed" && (!props?.width || !props?.height)) {
    throw Error(
      "You are using 'fixed' ratio, which are need both 'width' and 'height' property.",
    );
  }

  if (ratio === "width" && !props.width && !minWidth) {
    throw Error(
      "You are using 'width' ratio, which is missing 'width' property.",
    );
  }

  if (ratio === "height" && !props.height && !minHeight) {
    throw Error(
      "You are using 'height' ratio, which is missing 'height' property.",
    );
  }

  return (
    <Box
      width={width}
      height={height}
      maxWidth={overflow ? "initial" : "100%"}
      maxHeight={overflow ? "initial" : "100%"}
      minHeight={minHeight}
      minWidth={minWidth}
      position="relative"
      ref={containerRef}
    >
      {!isLoaded && (
        <Skeleton
          width={initWidth ?? "100%"}
          height={initHeight ?? "100%"}
          animation="wave"
          variant="rectangular"
        />
      )}
      <Box
        component={MuiImage}
        fill
        sizes="(max-width: 1920px) 100vw,
        100vw"
        onLoadingComplete={onLoadingComplete}
        sx={{
          objectFit,
          objectPosition: "top left",
          ...restSx,
        }}
        {...rest}
      />
    </Box>
  );
};

export default memo(Image);

const getMaxSize = (
  containerSize: number,
  size?: number,
  overflow?: boolean,
) => {
  return !size || (!overflow && size > containerSize)
    ? containerSize
    : size < 1
    ? 1
    : size;
};

const getSizeValueFromStringValue = (
  value: string,
  containerSize: number,
  minSize?: number,
  overflow?: boolean,
) => {
  let parsedValue = Number(value);

  switch (true) {
    case value.includes("%"):
      parsedValue = 0.01 * Number(value.slice(0, -1)) * containerSize;
      break;
    case value.includes("vw"):
      parsedValue = 0.01 * Number(value.slice(0, -2)) * window.innerWidth;
    case value.includes("vh"):
      parsedValue = 0.01 * Number(value.slice(0, -2)) * window.innerHeight;
      break;
    default:
      break;
  }
  if (isNaN(parsedValue)) return containerSize;

  return getMaxSize(containerSize, parsedValue, overflow);
};

import React from "react";
import { OG_IMAGE } from "constant";

export interface AppHeadProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  ogType?: string;
  fbAppId?: string;
  cardText?: string;
  createdAt?: string;
  updatedAt?: string;
  twitterId?: string;
}

const defaultAppHeadProps = {
  title: "NextJS App",
  description: "Description for NextJS version 13.x",
  ogType: "website",
  image: OG_IMAGE,
};

const AppHead = (props: AppHeadProps) => {
  return (
    <>
      <meta charSet="UTF-8" />
      <link rel="icon" href="/images/favicon.ico" />

      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta itemProp="name" content={props.title} />
      <meta itemProp="description" content={props.description} />
      <meta itemProp="image" content={props.image} />

      {socialTags(props).map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />;
      })}
    </>
  );
};

AppHead.defaultProps = defaultAppHeadProps as Partial<AppHeadProps>;

export default AppHead;

const socialTags = ({
  ogType,
  url,
  title,
  description,
  image,
  createdAt,
  updatedAt,
  twitterId,
  fbAppId,
}: AppHeadProps) => {
  const metaTags = [
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:site",
      content: twitterId,
    },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    {
      name: "twitter:creator",
      content: twitterId,
    },
    { name: "twitter:image:src", content: image },
    { name: "og:title", content: title },
    { name: "og:type", content: ogType },
    { name: "og:url", content: url },
    { name: "og:image", content: image },
    { name: "og:app_id", content: fbAppId },
    { name: "og:image:width", content: "1200" },
    { name: "og:image:height", content: "630" },
    {
      name: "og:site_name",
      content: title,
    },
    {
      name: "og:published_time",
      content: createdAt || new Date().toISOString(),
    },
    {
      name: "og:modified_time",
      content: updatedAt || new Date().toISOString(),
    },
  ];

  return metaTags;
};

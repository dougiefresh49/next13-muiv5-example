import { AppProvider } from "contexts";
import "public/styles/index.scss";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  return (
    <html>
      <head />
      <body>
        <AppProvider>{props.children}</AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;

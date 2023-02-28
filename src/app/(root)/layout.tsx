import MainLayout from "layouts/MainLayout";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  return <MainLayout {...props} />;
};

export default RootLayout;

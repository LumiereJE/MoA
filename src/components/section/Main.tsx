import React from "react";
import type { PropsWithChildren } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

type MainLayout = PropsWithChildren;

const Main = ({ children }: MainLayout) => {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | mylog"
        defaultTitle="react typescript"
        defer={false}
      >
        <title>title</title>
      </Helmet>
      <Header />
      <main id="main" role="main">
        {children}
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Main;

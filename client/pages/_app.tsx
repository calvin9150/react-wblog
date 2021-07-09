import wrapper from "@/store/store";
import { AppProps } from "next/app";
import Head from "next/head";

import Header from "@/components/Header";
import { FC } from "react";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Wblog</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
};
export default wrapper.withRedux(MyApp);

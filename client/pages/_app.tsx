import Header from "@/components/Header";
import wrapper from "@/store/configureStore";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
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
}
export default wrapper.withRedux(MyApp);

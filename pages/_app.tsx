import "@/styles/index.css";
import "@/styles/nprogress.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import nProgress from "nprogress";

nProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

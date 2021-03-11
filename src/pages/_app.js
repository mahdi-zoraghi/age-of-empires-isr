import Router from "next/router";
import NProgress from "nprogress";

import "nprogress/nprogress.css";

import "../styles/globals.css";

NProgress.configure({
  easing: "ease",
  speed: 500,
  showSpinner: false,
  trickleSpeed: 500,
  trickleRate: 0.05,
});

Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;

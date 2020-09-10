// import "../styles/globals.css";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import Page from "../components/shared/Page";
import "@brainhubeu/react-carousel/lib/style.css";
// import "antd/dist/antd.min.css";
// import "@brainhubeu/react-carousel/lib/style.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric) {
  // These metrics can be sent to any analytics service
  console.log(metric);
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="/images/vercel.svg" />
        <title>profile web</title>
        <link href="/css/nprogress.css" rel="stylesheet" />
        <link href="/css/global.css" rel="stylesheet" />

        <link
          href="https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {pageProps.ieBrowser && (
          <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.min.js" />
        )}
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
};

export default MyApp;
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Router from 'next/router';
import NProgress from "nprogress";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start()
})

Router.events.on("routeChangeComplete", () => {
  NProgress.done()
})

Router.events.on("routeChangeError", () => {
  NProgress.done()
})


export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com/" />
          <link rel="stylesheet" href="//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css" />
          <link rel='stylesheet' href='nprogress.css'/>
        </Head>
        <body>           
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
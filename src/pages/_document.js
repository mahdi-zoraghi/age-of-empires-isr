import Document, { Html, Head, Main, NextScript } from "next/document";

import Layout from "../components/Layout";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render = () => (
    <Html>
      <Head />
      <body>
        <Layout>
          <Main />
          <NextScript />
        </Layout>
      </body>
    </Html>
  );
}

export default MyDocument;

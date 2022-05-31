import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      
        <Html>
        <Head>
          <title>BeautyKim</title>
          <meta charSet="utf-8"></meta>
        </Head>
          <body>
            <Main />
            <NextScript />
          </body>
      </Html>
    )
  }
}

export default MyDocument
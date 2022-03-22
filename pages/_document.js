import { Html, Head, Main, NextScript } from 'next/document'
//_document.js y Head permite cambiar los titulos de nuestra pagina

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(cxt)
    return {...initialProps}
  }
}

export default function Document() {
  return (
    <Html>
      <Head>
            <title>My Portfolio</title>
            {/* Es lo que aparece en los buscadores... */}
            <meta name="description" content='Julio Aguero website' />
            <link rel='stylesheet' href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
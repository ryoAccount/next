import { Html, Head, Main, NextScript } from 'next/document'
import HeaderData from './header'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;500&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <HeaderData />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

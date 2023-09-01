import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import HeadData from './head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadData></HeadData>
      <Component {...pageProps} />
    </>
  )
}

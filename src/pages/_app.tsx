import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title key="title">Pensando Venezuela</title>
      </Head>
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

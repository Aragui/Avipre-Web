import '../assets/styles/main.css'
import type { AppProps } from 'next/app'
import Layout from '../containers/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

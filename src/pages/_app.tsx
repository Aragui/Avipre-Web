import '../assets/styles/main.css'
import '../assets/styles/error.css'
import type { AppProps } from 'next/app'
import Layout from '../containers/Layout'
import { Provider } from 'react-redux'
import { store } from '../util/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider> 
  )
}

export default MyApp

import '../assets/styles/main.css'
import '../assets/styles/error.css'
import type { AppProps } from 'next/app'
import Layout from '../containers/Layout'
import { Provider } from 'react-redux'
import { store } from '../util/store'
import { MessengerChat } from 'react-messenger-chat-plugin'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <MessengerChat
          pageId='1320130028050911'
          language='es_MX'
          debugMode={true}
          themeColor='#FCD844'
          loggedInGreeting="Hola, ¿en qué te podemos ayudar?"
          loggedOutGreeting="Hola, ¿en qué te podemos ayudar?"
        />
      </Layout>
    </Provider>
  )
}

export default MyApp

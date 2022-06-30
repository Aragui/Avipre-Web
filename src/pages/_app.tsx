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
/* 
  <!-- Messenger Plugin de chat Code -->
    <div id="fb-root"></div>

    <!-- Your Plugin de chat code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "1320130028050911");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    <!-- Your SDK code -->
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v14.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
*/
export default MyApp

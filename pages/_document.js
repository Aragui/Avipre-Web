import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/composed/Layout/header'
import Footer from '../components/composed/Layout/footer'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="./images/logos/logotipo-2322x688-13.png" type="image/x-icon" />

                {/* <!-- CSS only --> */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Header />
                <Main />
                <NextScript />
                <Footer />
            </body>
        </Html>
    )
}
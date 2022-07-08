import Head from "next/head";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const ErrorPage = () => {
    return (
        <div className="container-fluid min-height">
            <Head>
                <title>Error | Página no encontrada</title>
                <meta name="description" content="¡UUPS!" />
            </Head>
           <div className="row">
            <div className="col-md-6 col-sm-12 d-flex left my-5">
                <img src="/images/cheems.png" className="cheems" alt="Error" />
            </div>
            <div className="col-md-6 col-sm-12 d-flex flex-column right flex-column my-5">
                <h1>¡UUPS!</h1>

                <h3>Lo que estabas buscando no se encuentra aquí</h3>

                <Link href='/'>
                    <a className="link-warning">Ir al inicio</a>
                </Link>
            </div>
           </div>
        </div>
    );
}

export default ErrorPage;
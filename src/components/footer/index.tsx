/* eslint-disable @next/next/no-img-element */

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-sm-12 d-flex justify-content-start align-items-center">
                        <img src="./images/logos/logotipo-2322x688-13.png" className='ms-5' style={{ height: '70px' }} alt="Avipre" />
                    </div>
                    <div className="col-md-4 col-sm-12 d-flex justify-content-start align-items-center">
                        <div className='ms-5 mt-3'>
                            <h5>Dirección</h5>
                            <p>C. 28 332C, entre 25 y 27</p>
                            <p>Emiliano Zapata Nte, CP: 97129</p>
                            <p>Mérida, Yuc., Mexico</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12 d-flex justify-content-start align-items-center">
                        <div className='ms-5 mt-3'>
                            <h5>Contacto</h5>
                            <p><strong>Arq. Johari Aviles Preciat</strong></p>
                            <p>Email: <a className="mail" href="mailto:johari.aviles@gmail.com">johari.aviles@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
/* eslint-disable @next/next/no-img-element */
import { BannerWrapper } from './excavators-banner.styles'

const ExcavatorsBanner = () => {
    return (
        <BannerWrapper className="container-fluid" id="maquinaria">
            <div className="row py-5">
                <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                    <img src="/images/excavadora.png" className='banner-cover' alt="Renta de retroexcavadoras" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 py-3 ps-3 d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <h2 className='banner-title'>RENTA de Retroexcavadoras</h2>

                        <p className='banner-subtitle mt-5'>Hacemos trabajos de:</p>

                        <ul className='banner-list'>
                            <li>Limpieza de terrenos y desmontes.</li>
                            <li>Fosas.</li>
                            <li>Cisternas.</li>
                            <li>Piscinas.</li>
                            <li>Zanjas.</li>
                        </ul>

                        <a href="tel:9991295507" className="btn btn-warning mt-5">9991295507</a>
                    </div>
                </div>
            </div>
        </BannerWrapper>
    );
}

export default ExcavatorsBanner;
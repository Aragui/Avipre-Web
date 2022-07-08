import AdBanner from '../../components/ad-banner';

const CamionBanner = () => {
    return (
        <AdBanner imgUrl='/images/camion.jpeg' phoneNumber='9991295507' imgAlt='Venta de agregados' orientation='reverse'>
            <div className="my-3">
                <h2><span className='bg-warning'>RENTA</span> de Volquete de 14m3</h2>

                <p className="text-start">
                    Contamos con volquetes de 14m3, para renta por dia o por viaje.
                </p>

                <p className="text-start">
                    Sirve para el desalojo de material derivado de limpieza de terrenos o excavaciones
                </p>
            </div>

        </AdBanner>
    );
}

export default CamionBanner;
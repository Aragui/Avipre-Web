import AdBanner from '../../components/ad-banner';

const ExcavatorsBanner = () => {
    return (
        <AdBanner imgUrl='/images/excavadora.png' phoneNumber='9991295507' imgAlt='Renta de retroexcavadoras' id='maquinaria'>
            <div className='my-3'>
                <h2><span className='bg-warning'>RENTA</span> de Retroexcavadoras</h2>
                <p className='text-start'>Hacemos trabajos de:</p>

                <ul>
                    <li>Limpieza de terrenos y desmontes.</li>
                    <li>Fosas.</li>
                    <li>Cisternas.</li>
                    <li>Piscinas.</li>
                    <li>Zanjas.</li>
                </ul>
            </div>
        </AdBanner>
    );
}

export default ExcavatorsBanner;
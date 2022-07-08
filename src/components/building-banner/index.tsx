import styles from './building-banner.module.css';

const BuildingBanner = () => {
    return (
        <div className={styles.banner + ' container-fluid'} id='agregados'>
            <div className={"row justify-content-center align-items-center " + styles.index}>
                <div className="col-md-6 d-flex flex-column align-items-center my-5">
                    <h2 className="text-light">Venta de Agregados</h2>
                    <div className={styles.content}>
                        <p className="text-light">Tenemos la explotación de un bacon de materiales y podemos ofrecerle:</p>
                        <p className="text-light">- Polvo de piedra</p>
                        <p className="text-light">- Grava</p>
                        <p className="text-light">- Piedra hilada (para cimentación)</p>
                        <p className="text-light">- Material base y/o cribado</p>
                        <p className="text-light">- Material de relleno gruebo y/o greña</p>
                        <p className="text-light">Todo el material se entrega en volquetes de 14m3.</p>
                    </div>
                    <a href="tel:9991295507" className='btn btn-warning'>Cotiza sin compromiso<br/>9991295507</a>
                </div>
            </div>
        </div>
    );
}

export default BuildingBanner;
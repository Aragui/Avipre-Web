/* eslint-disable @next/next/no-img-element */
import Image  from "next/image"

const Header = () => {
    return (
        <div className="navbar">
        <div className="container">
            <img src="./images/logos/logotipo-2322x688-13.png" style={{height: '70px'}} alt=""/>
            <div className="menu">
                <ul className="menu-ul">
                    <li><a href="" className="menu-link">Inicio</a></li>
                    <li><a href="" className="menu-link">Proyectos</a></li>
                    <li><a href="" className="menu-link">Maquinaria</a></li>
                    <li><a href="" className="menu-link">Contacto</a></li>
                    <li><a href="" className="menu-link">Ubicación</a></li>
                    <li><a href="" className="menu-link"></a></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Header
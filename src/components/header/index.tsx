/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <Link href="/"><a><img src="./images/logos/logotipo-2322x688-13.png" className="navbar-brand" style={{ height: '70px' }} alt="" /></a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Abrir navegación">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link href="/"><a className="menu-link nav-link">Inicio</a></Link></li>
                            <li className="nav-item"><Link href="/#proyectos"><a className="menu-link nav-link">Proyectos</a></Link></li>
                            <li className="nav-item"><Link href="/#maquinaria"><a className="menu-link nav-link">Maquinaria</a></Link></li>
                            <li className="nav-item"><Link href="/#ubicacion"><a className="menu-link nav-link">Ubicación</a></Link></li>
                            {/* <li className="nav-item"><a className="menu-link"></a></li> */}
                        </ul>
                    </div>
            </div>
        </nav>
    )
}

export default Header
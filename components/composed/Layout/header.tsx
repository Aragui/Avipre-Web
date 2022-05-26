/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

const Header = () => {
    // useEffect(() => {
    //     window.addEventListener('scroll', (e) => console.log(window.scrollY))
    //     console.log('useState')
    //     return () => {
    //         window.removeEventListener('scroll', (e) => console.log(window.scrollY))
    //     }
    // })

    const handleScroll = () => {

    }
    return (
        <div className="navbar">
            <div className="container">
                <Link href="/"><a><img src="./images/logos/logotipo-2322x688-13.png" style={{ height: '70px' }} alt="" /></a></Link>
                <div className="menu">
                    <ul className="menu-ul">
                        <li><Link href="/"><a className="menu-link">Inicio</a></Link></li>
                        <li><Link href="/#proyectos"><a className="menu-link">Proyectos</a></Link></li>
                        <li><Link href="/#maquinaria"><a className="menu-link">Maquinaria</a></Link></li>
                        <li><a className="menu-link">Contacto</a></li>
                        <li><Link href="/#ubicacion"><a className="menu-link">Ubicación</a></Link></li>
                        <li><a className="menu-link"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
import React from 'react'

export default function
    () {
    return (
        <header>
            <div id="logo">
                <a href="/">
                    <img src="images/Level-Up.png" alt="Level-Up" />
                </a>
            </div>
            <nav id="catalogonav">
                <a href="/">Inicio</a>
                <a href="/catalogo">Catalogo</a>
                <a href="/aboutus">Nosotros</a>
                <a href="/blog">Blog</a>
            </nav>
            <div id="extra">
                <a href="carrito"> Carro 🛒 </a>
                <a href="perfil">Usuario</a>
                <a href='login' >Iniciar Sesión</a>
            </div>
        </header>
    )
}

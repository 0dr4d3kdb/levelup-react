import React from 'react'

export default function
    () {
    return (
        <header>
            <div id="logo">
                <a href="/">
                    <img src="https://raw.githubusercontent.com/0dr4d3kdb/proyectofullstack1/a998f004585f2377fc7ea88e2dae116bd8ee0fb2/Level-Up.png" alt="Level-Up" />
                </a>
            </div>
            <nav id="catalogonav">
                <a href="/">Inicio</a>
                <a href="/catalogo">Catalogo</a>
                <a href="/aboutus">Nosotros</a>
                <a href="#">Blog</a>
            </nav>
            <div id="extra">
                <a href="carrito"> Carro 🛒 </a>
                <a href="perfil">Usuario</a>
                <a href='login' >Iniciar Sesión</a>
            </div>
        </header>
    )
}
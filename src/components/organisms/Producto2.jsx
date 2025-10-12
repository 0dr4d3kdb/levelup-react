import React from 'react'

export default function Producto2() {
    return (
        <div className="producto">
            <a href="resena.html">
                <div className="productolink">
                    <img src="/images/catan.jpg" alt="catan"/>
                    <div className="prod">
                        <p className="nombreprod">Juego Catan</p>
                    </div>
                </div>
            </a>
            <p className="precio">$29.990 clp</p>
            <p className="categoria">Categoría<br/>Juegos de Mesa</p>
            <p className="descripcion">Un clásico juego de estrategia donde los jugadores compiten por colonizar y
            expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en
            familia o con amigos.</p>
            <button type="button" className="agregar">Agregar al carro</button>
        </div>
    )
}

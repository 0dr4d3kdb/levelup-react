import React from 'react'

export default function Producto1() {
  return (
    <div className="producto">
        <a href="#">
            <div className="productolink">
                <img src="/images/carcassonne.jpg" alt="carcassonne"/>
                <div className="prod">
                    <p className="nombreprod">Juego Carcassonne</p>
                </div>
            </div>
        </a>
        <p className="precio">$24.990 clp</p>
        <p className="categoria">Categoría<br/>Juegos de Mesa</p>
        <p className="descripcion">Un juego de colocación de fichas donde los jugadores construyen el paisaje
        alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y fácil de
        aprender.</p>
        <button type="button" className="agregar">Agregar al carro</button>
    </div>
  )
}

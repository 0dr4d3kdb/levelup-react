import React from 'react'

export default function Producto6() {
  return (
    <div className="producto">
        <a href="#">
            <div className="productolink">
                <img src="pcasus.png" alt="pc asus"/>
                <div className="prod">
                    <p className="nombreprod">PC Gamer ASUS ROG Strix</p>
                </div>
            </div>
        </a>
        <p className="precio">$1.299.990 clp</p>
        <p className="categoria">Categoría<br/>Computadores Gamers</p>
        <p className="descripcion">Un potente equipo diseñado para los gamers más exigentes,
        equipado con los últimos componentes para ofrecer un rendimiento excepcional en
        cualquier juego.</p>
        <button type="button" className="agregar">Agregar al carro</button>
    </div>
  )
}

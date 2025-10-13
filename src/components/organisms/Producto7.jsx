import React from 'react'

export default function Producto7() {
  return (
    <div className="producto">
        <a href="#">
            <div className="productolink">
                <img src="silla-gamer.jpg" alt="silla gamer"/>
                <div className="prod">
                    <p className="nombreprod">Silla Gamer Secretlab Titan</p>
                </div>
            </div>
        </a>
        <p className="precio">$349.990 clp</p>
        <p className="categoria">Categoría<br/>Sillas Gamers</p>
        <p className="descripcion">Diseñada para el máximo confort, esta silla ofrece un soporte
        ergonómico y personalización ajustable para sesiones de juego prolongadas.</p>
        <button type="button" className="agregar">Agregar al carro</button>
    </div>
  )
}

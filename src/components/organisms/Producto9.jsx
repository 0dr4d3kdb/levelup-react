import React from 'react'

export default function Producto9() {
  return (
    <div className="producto">
        <a href="#">
            <div className="productolink">
                <img src="mousepad-razer.jpg" alt="mousepad razer"/>
                <div className="prod">
                    <p className="nombreprod">Mousepad Razer Goliathus Extended Chroma</p>
                </div>
            </div>
        </a>
        <p className="precio">$29.990 clp</p>
        <p className="categoria">Categoría<br/>Mousepad</p>
        <p className="descripcion">Ofrece un área de juego amplia con
        iluminación RGB personalizable, asegurando una superficie suave y uniforme para el
        movimiento del mouse.</p>
        <button type="button" className="agregar">Agregar al carro</button>
    </div>
  )
}

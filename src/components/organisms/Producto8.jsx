import React from 'react'

export default function Producto8() {
  return (
    <div className="producto">
        <a href="#">
            <div className="productolink">
                <img src="mouse-logitech.jpg" alt="mouse logitech"/>
                <div className="prod">
                    <p className="nombreprod">Mouse Gamer Logitech G502 HERO</p>
                </div>
            </div>
        </a>
        <p className="precio">$49.990 clp</p>
        <p className="categoria">Categoría<br/>Mouse</p>
        <p className="descripcion">Con sensor de alta precisión y botones
        personalizables, este mouse es ideal para gamers que buscan un control preciso y
        personalización.</p>
        <button type="button" className="agregar">Agregar al carro</button>
    </div>
  )
}

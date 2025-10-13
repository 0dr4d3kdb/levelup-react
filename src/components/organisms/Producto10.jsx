import React from 'react'

export default function Producto10() {
  return (
    <div className="producto">
        <a href="#">
            <div className="productolink">
                <img src="polera.jpg" alt="polera"/>
                <div className="prod">
                    <p className="nombreprod">Polera Gamer Personalizada 'Level-Up'</p>
                </div>
            </div>
        </a>
        <p className="precio">$14.990 clp</p>
        <p className="categoria">Categoría<br/>Poleras Personalizadas</p>
        <p className="descripcion">Una camiseta cómoda y estilizada, con la
        posibilidad de personalizarla con tu gamer tag o diseño favorito.</p>
        <button type="button" className="agregar">Agregar al carro</button>
    </div>
  )
}

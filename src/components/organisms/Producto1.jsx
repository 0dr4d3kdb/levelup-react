import React from 'react'

export default function Producto1(props) {
  const {code, image, name, price, description, category} = props
  return (
    <div className="producto">
        <a href="/resena">
            <div className="productolink">
                <div className="imagenProducto" style={{backgroundImage: `url(${image})`}}></div>
                <div className="prod">
                    <p className="nombreprod">{name}</p>
                </div>
            </div>
        </a>
        <p className="precio">{price}</p>
        <p className="categoria">Categoría<br/>{category}</p>
        <p className="descripcion">{description}</p>
        <button type="button" className="agregar">Agregar al carro</button>
    </div>
  )
}

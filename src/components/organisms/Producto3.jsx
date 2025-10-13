import React from 'react'

export default function Producto3() {
  return (
    <div className="producto">
        <a href="#">
            <div className="productolink">
                <img src="control-xbox.jpg" alt="control xbox"/>
                <div className="prod">
                    <p className="nombreprod">Controlador Inalámbrico Xbox Series X</p>
                </div>
            </div>
        </a>
        <p className="precio">$59.990 clp</p>
        <p className="categoria">Categoría<br/>Accesorios</p>
        <p className="descripcion">Ofrece una experiencia de juego cómoda con
        botones mapeables y una respuesta táctil mejorada. Compatible con consolas Xbox y PC.</p>
        <button type="button" className="agregar">Agregar al carro</button>
    </div>
  )
}

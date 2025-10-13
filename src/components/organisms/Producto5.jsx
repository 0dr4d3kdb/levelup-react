import React from 'react'

export default function Producto5() {
  return (
    <div className="producto">
        <a href="#">
            <div className="productolink">
                <img src="play5.jpg" alt="catan"/>
                <div className="prod">
                    <p className="nombreprod">Play Station 5</p>
                </div>
            </div>
        </a>
        <p className="precio">$549.990 clp</p>
        <p className="categoria">Categoría<br/>Consolas</p>
        <p className="descripcion">La consola de última generación de Sony, que ofrece gráficos
        impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva.</p>
        <button type="button" className="agregar">Agregar al carro</button>
    </div>
  )
}

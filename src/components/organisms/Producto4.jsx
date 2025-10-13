import React from 'react'

export default function Producto4() {
  return (
            <div className="producto">
                <a href="#">
                    <div className="productolink">
                        <img src="audifonos.jpg" alt="catan"/>
                        <div className="prod">
                            <p className="nombreprod">Auriculares Gamer HyperX Cloud II</p>
                        </div>
                    </div>
                </a>
                <p className="precio">$79.990 clp</p>
                <p className="categoria">Categoría<br/>Accesorios</p>
                <p className="descripcion">Proporcionan un sonido envolvente de calidad con un
                micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad
                durante largas sesiones de juego.</p>
                <button type="button" className="agregar">Agregar al carro</button>
            </div>
  )
}

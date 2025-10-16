import React from 'react'
import Producto1 from '../organisms/Producto1'
import Filtros from '../organisms/Filtros'

export default function Catalogo() {
  return (
    <>
      <div id="seccion2">
        <Filtros/>
        <div id="productos">
          <Producto1
            code="1"
            image="/images/carcassonne.jpg"
            name="Carcassonne"
            description="Un clásico juego de estrategia donde los jugadores compiten por colonizar y
                expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en
                familia o con amigos."
            category="Juegos de mesa"
            price="$39.990"/>
        </div>
      </div>
    </>
    
  )
}

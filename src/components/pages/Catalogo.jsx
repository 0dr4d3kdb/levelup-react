import React from 'react'
import Producto1 from '../organisms/Producto1'
import Filtros from '../organisms/Filtros'
import Buscador from '../molecules/Buscador'

export default function Catalogo() {
  return (
    <>
      <Buscador/>
      <div id="seccion2">
        <Filtros/>
        <div id="productos">
          <Producto1
            code="1"
            image="/images/catan.jpg"
            name="Catan"
            description="Un clásico juego de estrategia donde los jugadores compiten por colonizar y
                expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en
                familia o con amigos."
            category="Juegos de mesa"
            price="$29.990 clp"/>
          <Producto1
            code="2"
            image="/images/carcassonne.jpg"
            name="Carcassonne"
            description="Un juego de colocación de fichas donde los jugadores construyen el paisaje
                alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y fácil de
                aprender."
            category="Juegos de mesa"
            price="$24.990 clp"/>
          <Producto1
            code="4"
            image="/images/control-xbox.jpg"
            name="Auriculares Gamer HyperX Cloud II"
            description="Ofrece una experiencia de juego cómoda con
                botones mapeables y una respuesta táctil mejorada. 
                Compatible con consolas Xbox y PC."
            category="Accesorios"
            price="$59.990 clp"/>
          <Producto1
            code="3"
            image="/images/audifonos.jpg"
            name="Controlador Inalámbrico Xbox Series X"
            description="Proporcionan un sonido envolvente de calidad con un
                micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad
                durante largas sesiones de juego."
            category="Accesorios"
            price="$79.990 clp"/>

        </div>
      </div>
    </>
    
  )
}

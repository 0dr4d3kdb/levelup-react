import React from 'react'
import Header from '../organisms/Header'
import Seccion1 from '../organisms/Seccion1'
import Product from '../organisms/Product'

export default function Home() {
  return (
    
    <>
    <Seccion1/>
     <main className="main-content">
      <h2 className="section-title">Nuestros Productos</h2>
        <div className="product-grid">
    <Product
     image="https://i5.walmartimages.com/asr/b654b6e8-61af-431f-9b28-fe1a3a30ac00.184983326af0fd1a08375024b4189dc7.jpeg"
     title="Teclado Mecánico RGB"
     description="Teclado de alto rendimiento con iluminación RGB personalizable. Ideal para gamers profesionales."
     price="120.000"
    />
    <Product 
        image="https://www.centec.cl/cdn/shop/files/pixelcut-export__2831_2920240524-24908-zkwvoi_1800x.png?v=1737574381"
        title="Mouse Gamer Ergonómico"
        description="Mouse con sensor de precisión, diseño ergonómico y botones programables para una ventaja competitiva."
        price="50.000"
      />
      <Product
        image="https://factorytech.cl/cdn/shop/files/Audifonos-Gamer-Soyto-SY830-Notebooks-PS4-PC-XBOX-Blue-LED-1_dc1e9791-ce3e-4bb2-a03a-b6fb58e4a16b.jpg?v=1715442210"
        title="Audífonos con Micrófono"
        description="Sonido envolvente 7.1 y micrófono con cancelación de ruido para una comunicación clara en equipo."
        price="85.000"
      />
      <Product
        image="https://www.acerstore.cl/cdn/shop/files/1_XZ342CU.png?v=1742563697"
        title="Monitor Gamer 144Hz"
        description="Monitor de 24 pulgadas con tasa de refresco de 144Hz y tiempo de respuesta de 1ms. Imágenes fluidas y nítidas."
        price="250.000"
      />
       </div>
    </main>
    </>
  )
}

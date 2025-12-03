import React from 'react'
import { jwtDecode } from "jwt-decode";

export default function Perfil() {
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);

  return (
    <div className="perfil-container">
      <img
        src="https://raw.githubusercontent.com/0dr4d3kdb/proyectofullstack1/refs/heads/terminadoDelvis/imagenes/gamer-icon.png"
        alt="Avatar"
        className="perfil-avatar"
      />
      <div className="perfil-nombre">Arturo</div>
      <div className="perfil-email">{decodedToken.sub}</div> 
      <div className="perfil-puntos">Puntos: 1200</div> 
    </div>
  );
}

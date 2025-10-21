import React from 'react'

export default function SectionRegistro() {
  return (
    <div>
    <section class="form-container">
  <div class="form-card">
    <h2>Registro</h2>
    <form id="registroForm">
      <div className="form-group">
        <label htmlFor="username">Usuario</label>
        <input type="text" id="username" placeholder="Ingresa tu usuario" required/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" placeholder="ejemplo@email.com" required/>
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" placeholder="••••••" required/>
      </div>

      <button type="submit" className="form-btn">Registrarse</button>
    </form>

    <p className="switch-form">¿Ya tienes cuenta? <a href="login">Inicia sesión</a></p>
  </div>
</section>
 <script src="script.js"></script>
 </div>
  )
}

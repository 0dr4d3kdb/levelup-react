import React from 'react'

export default function SectionLogin() {
  return (
    <div id='Login'>
    <section className="form-container">
  <div className="form-card">
    <h2>Iniciar Sesión</h2>
    <form id="loginForm">
      <div className="form-group">
        <label htmlFor="login-email">Correo electrónico</label>
        <input type="email" id="login-email" placeholder="ejemplo@email.com" required/>
      </div>

      <div className="form-group">
        <label htmlFor="login-password">Contraseña</label>
        <input type="password" id="login-password" placeholder="••••••" required/>
      </div>

      <button type="submit" className="form-btn">Iniciar Sesión</button>
    </form>

    <p className="switch-form">¿No tienes cuenta? <a href="registro">Regístrate</a></p>
  </div>
</section>
<script src="script.js"></script>
</div>
  )
}

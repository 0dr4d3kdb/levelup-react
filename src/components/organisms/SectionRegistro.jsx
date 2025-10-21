import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

export default function SectionRegistro() {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Ingresa un usuario.';
    } else if (username.length < 3) {
      newErrors.username = 'Mínimo 3 caracteres.';
    }

    if (!email.trim()) {
      newErrors.email = 'Ingresa un correo.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Correo no válido.';
    }

    if (!password.trim()) {
      newErrors.password = 'Ingresa la contraseña.';
    } else if (password.length < 6) {
      newErrors.password = 'Mínimo 6 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/login');
    }
  };

  return (
    <div>
      <section className="form-container">
        <div className="form-card">
          <h2>Registro</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu usuario"
                className={errors.username ? 'input-invalid' : ''}
              />
              {errors.username && <span className="input-error">{errors.username}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@email.com"
                className={errors.email ? 'input-invalid' : ''}
              />
              {errors.email && <span className="input-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                className={errors.password ? 'input-invalid' : ''}
              />
              {errors.password && <span className="input-error">{errors.password}</span>}
            </div>

            <button type="submit" className="form-btn">Registrarse</button>
          </form>

          <p className="switch-form">
            ¿Ya tienes cuenta? <a href="login">Inicia sesión</a>
          </p>
        </div>
      </section>
    </div>
  );
}

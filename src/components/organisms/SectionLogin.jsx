import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

export default function SectionLogin() {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

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
      navigate('/');
    }
  };

  return (
      <section className="form-container">
        <div className="form-card">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="login-email">Correo electrónico</label>
              <input
                type="email"
                id="login-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@email.com"
                className={errors.email ? 'input-invalid' : ''}
              />
              {errors.email && <span className="input-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Contraseña</label>
              <input
                type="password"
                id="login-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                className={errors.password ? 'input-invalid' : ''}
              />
              {errors.password && <span className="input-error">{errors.password}</span>}
            </div>

            <button type="submit" className="form-btn">Iniciar Sesión</button>
          </form>

          <p className="switch-form">
            ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
          </p>
        </div>
      </section>
  );
}

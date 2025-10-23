import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SectionLogin from '../organisms/SectionLogin'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate
  }
})

describe('Login Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderLogin = () => {
    return render(
      <BrowserRouter>
        <SectionLogin />
      </BrowserRouter>
    )
  }

  test('Renderiza el formulario de inicio de sesión', () => {
    renderLogin()
    const heading = screen.getByRole('heading', { name: /iniciar sesión/i })
    const emailInput = screen.getByLabelText(/correo electrónico/i)
    const passwordInput = screen.getByLabelText(/contraseña/i)
    
    expect(heading).toBeDefined()
    expect(emailInput).toBeDefined()
    expect(passwordInput).toBeDefined()
  })

  test('Muestra los errores si esta Vacio el correo', () => {
    renderLogin()
    const submitButton = screen.getByRole('button', { name: /iniciar sesión/i })
    fireEvent.click(submitButton)
    
    expect(screen.getByText('Ingresa un correo.')).toBeDefined()
  })

  

  test('Muestra los errores si esta Vacio la contraseña', () => {
    renderLogin()
    const emailInput = screen.getByLabelText(/correo electrónico/i)
    const submitButton = screen.getByRole('button', { name: /iniciar sesión/i })
    
    fireEvent.change(emailInput, { target: { value: 'valid@email.com' } })
    fireEvent.click(submitButton)
    
    expect(screen.getByText('Ingresa la contraseña.')).toBeDefined()
  })

  test('Se va a Home si el Login es exitoso', () => {
    renderLogin()
    const emailInput = screen.getByLabelText(/correo electrónico/i)
    const passwordInput = screen.getByLabelText(/contraseña/i)
    const submitButton = screen.getByRole('button', { name: /iniciar sesión/i })
    
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } })
    fireEvent.change(passwordInput, { target: { value: '123456' } })
    fireEvent.click(submitButton)
    
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })


})
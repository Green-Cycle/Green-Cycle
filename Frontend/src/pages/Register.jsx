import './Register.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/auth';
function Register() {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    name: '',
    email: '',
    cpf: '',
    telefone: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setRegData({
      ...regData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset previous errors
    setErrors({});
    setMessage('');

    // Input validation
    const newErrors = {};

    if (!regData.name) {
      newErrors.name = 'Nome é obrigatório.';
    }

    if (!regData.cpf) {
      newErrors.cpf = 'CPF é obrigatório.';
    }

    if (!regData.telefone) {
      newErrors.telefone =
        'Favor digitar um telefone válido no formato (00)00000-0000.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(regData.email)) {
      newErrors.email = 'Favor digitar um email válido.';
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(regData.password)) {
      newErrors.password =
        'Senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas e números.';
    }

    if (regData.password !== regData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const data = await register(regData);
      setMessage(data.msg);
      navigate('/login');
      return;
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className='register'>
      {' '}
      <div className='register__wrapper'>
        <h3 className='register__title'>CRIAR CONTA</h3>

        <form onSubmit={handleSubmit}>
          <div className='register__input-wrapper'>
            <input
              className='register__input'
              type='text'
              name='name'
              placeholder='Nome Completo'
              value={regData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className='register__input-error'>{errors.name}</p>
            )}
          </div>
          <div className='register__input-wrapper'>
            <input
              className='register__input'
              type='number'
              name='cpf'
              placeholder='CPF'
              value={regData.cpf}
              onChange={handleChange}
            />
            {errors.cpf && (
              <p className='register__input-error'>{errors.cpf}</p>
            )}
          </div>
          <div className='register__input-wrapper'>
            <input
              className='register__input'
              type='email'
              name='email'
              placeholder='E-mail'
              value={regData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className='register__input-error'>{errors.email}</p>
            )}
          </div>
          <div className='register__input-wrapper'>
            <input
              className='register__input'
              type='number'
              name='telefone'
              placeholder='Telefone (00)00000-0000'
              value={regData.telefone}
              onChange={handleChange}
            />
            {errors.telefone && (
              <p className='register__input-error'>{errors.telefone}</p>
            )}
          </div>
          <div className='register__input-wrapper'>
            <input
              className='register__input'
              type='password'
              name='password'
              placeholder='Senha'
              value={regData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className='register__input-error'>{errors.password}</p>
            )}
          </div>
          <div className='register__input-wrapper'>
            <input
              className='register__input'
              type='password'
              name='confirmPassword'
              placeholder='Confirme sua senha'
              value={regData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className='register__input-error'>{errors.confirmPassword}</p>
            )}
          </div>

          <button className='register__button-wrapper' type='submit'>
            Cadastrar
          </button>

          <span className='register__login '>
            Já é um membro?
            <Link to='/login' className='auth__link'>
              Faça o login aqui!!
            </Link>
          </span>
        </form>
        {message && (
          <div className='errorPopup'>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Register;

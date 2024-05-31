import { useJsApiLoader } from '@react-google-maps/api';
import './Register.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../utils/api';
function Register() {
  const [regData, setRegData] = useState({
    name: '',
    email: '',
    cpf: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    cep: '',
    telefone: '',
    role: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setRegData({
      ...regData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(regData);
      setMessage(data.msg);
      return;
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className='auth'>
      {' '}
      <form className='auth__container' onSubmit={handleSubmit}>
        <h3 className='auth__title'>Inscrever-se</h3>

        <div className='auth__personal-info'>
          <div>
            <label className='auth__label'>Nome:</label>
            <input
              className='auth__input'
              type='text'
              name='name'
              value={regData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='auth__label'>CPF:</label>
            <input
              className='auth__input'
              type='text'
              name='cpf'
              value={regData.cpf}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='auth__label'>Email:</label>
            <input
              className='auth__input'
              type='email'
              name='email'
              value={regData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='auth__label'>Telefone:</label>
            <input
              className='auth__input'
              type='number'
              name='telefone'
              value={regData.telefone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='auth__label'>Senha:</label>
            <input
              className='auth__input'
              type='password'
              name='password'
              value={regData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='auth__label'>Confirme sua senha:</label>
            <input
              className='auth__input'
              type='password'
              name='confirmPassword'
              value={regData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='auth__adress-info'>
          <div>
            {' '}
            <div>
              <label className='auth__label'>Rua:</label>
              <input
                className='auth__input'
                type='text'
                name='rua'
                value={regData.rua}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='auth__label'>Número:</label>
              <input
                className='auth__input'
                type='text'
                name='numero'
                value={regData.numero}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label className='auth__label'>Complemento:</label>
              <input
                className='auth__input'
                type='text'
                name='complemento'
                value={regData.complemento}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='auth__label'>CEP:</label>
              <input
                className='auth__input'
                type='text'
                name='cep'
                value={regData.cep}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label className='auth__label'>Bairro:</label>
              <input
                className='auth__input'
                type='text'
                name='bairro'
                value={regData.bairro}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='auth__label'>Cidade:</label>
              <input
                className='auth__input'
                type='text'
                name='cidade'
                value={regData.cidade}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button className='auth__button' type='submit'>
          Inscrever-se
        </button>
        {message && <p>{message}</p>}
        <span className='auth__subtitle'>
          Já é um membro?
          <Link to='/login' className='auth__link'>
            Faça o login aqui!!
          </Link>
        </span>
      </form>
    </div>
  );
}
export default Register;

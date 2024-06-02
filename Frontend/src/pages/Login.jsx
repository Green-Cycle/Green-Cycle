import './Register.css';
import './Login.css';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login, getUser } from '../utils/auth';

import { useUser } from '../contexts/UserContext';

function Login() {
  const { user, setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: '',
  });
  const [emailError, setEmailError] = useState({
    error: false,
    message: '',
  });

  const navigate = useNavigate();

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/;

  const handleLogin = async (event) => {
    event.preventDefault();
    setUser({
      name: "new name"
    })

    // RESET ERRORS
    setMessage('');
    setEmailError({ error: false });
    setPasswordError({ error: false });

    // TEST INPUTS
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    // IF INPUT TEST FAILS
    if (!isEmailValid) {
      return setEmailError({
        error: true,
        message: 'Favor digitar um email válido.',
      });
    }
    if (!isPasswordValid) {
      return setPasswordError({
        error: true,
        message:
          'Senha tem que ter no mínimo 8 caracteres e conter letras maiúsculas, minúsculas e números.',
      });
    }

    // INPUT TEST SUCCESSFUL
    setPasswordError({ error: false, message: '' });
    setEmailError({ error: false, message: '' });

    const loginData = { email, password };
    const result = await login(loginData);
    console.log(result)



    if (result) {
      // Save token to localStorage or context/state management
      localStorage.setItem('token', result);
      const currentUser = await getUser(result)
      console.log(currentUser)
      setMessage('Login successful!');
    } else {
      return setMessage(result.message);
    }
    navigate('/store');
  }
    
    return (
    <div className='login'>
      <div className='login__wrapper'>
        <h2 className='login__title'>LOGIN</h2>
        <form className='login__form' onSubmit={handleLogin}>
          <div className='login__input-wrapper'>
            <input
              className='login__input'
              name='email'
              type='email'
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError.error && (
              <p className='login__input-error'>{emailError.message}</p>
            )}
          </div>
          <div>
            <input
              className='login__input'
              name='password'
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError.error && (
              <p className='login__input-error'>{passwordError.message}</p>
            )}
          </div>
          <div className='login__button-wrapper'>
            <button type='submit'>Login</button>
            <p className='login__register'>
              Ainda não possui um cadastro? <Link className='login__register-link' to='/register'>Cadastre-se.</Link>{' '}
            </p>
          </div>
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
export default Login;

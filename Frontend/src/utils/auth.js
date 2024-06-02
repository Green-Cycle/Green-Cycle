import { BASE_URL } from './const';


const register = (regData) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(regData),
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((res) =>
      res
        .status(400)
        .send({ message: 'Um dos campos foi preenchido incorretamente' })
    );
};

const login = async (loginData) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error('Invalid credentials');
    }

    const data = await response.json();
    console.log('Login efetuado', data);
    return data;
  } catch (error) {
    console.error('Login failed:', error.message);
    return { message: 'Login failed' };
  }
};

export const getUser = async (token) => {
  if (!token || typeof token !== 'string') {
    throw new Error('400 - The provided token is in the wrong format');
  }

  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.status === 401) {
        throw new Error('401 - The provided token is invalid');
      }
      return res.json();
    })
    .then((data) => data);
};

export { register, login };

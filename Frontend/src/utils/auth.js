const register = (regData) => {
  return fetch('http://localhost:3000/register', {
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
    const response = await fetch('http://localhost:3000/login', {
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

export { register, login };

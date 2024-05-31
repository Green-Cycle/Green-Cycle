const getAllProducts = async () => {
  const response = await fetch('http://localhost:3000/products', {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const products = await response.json();
  return products;
};

const getFeaturedProducts = async () => {
  const response = await fetch('http://localhost:3000/products/featured', {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const products = await response.json();
  return products;
};

const getProductsByCategory = async (category) => {
  const response = await fetch(
    `http://localhost:3000/products/category/${category}`,
    {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Content-type': 'application/json',
      },
    }
  );
  const products = await response.json();
  return products;
};

const getProductsByStore = async (company) => {
  const response = await fetch(
    `http://localhost:3000/products/company/${company}`,
    {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Content-type': 'application/json',
      },
    }
  );
  const products = await response.json();
  return products;
};

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

    return data; // The token returned from the server
  } catch (error) {
    console.error('Login failed:', error.message);
    return { message: 'Login failed' };
  }
};
export {
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getProductsByStore,
  register,
  login,
};

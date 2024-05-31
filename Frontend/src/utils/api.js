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
export {
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getProductsByStore,
  register,
};

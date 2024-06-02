const BASE_URL = 'https://green-cycle-ys6i.onrender.com';

const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`, {
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

  const response = await fetch(`${BASE_URL}/products/featured`, {
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
  const response = await fetch(`${BASE_URL}/products/category/${category}`, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const products = await response.json();
  return products;
};

const getProductsByStore = async (company) => {

  const response = await fetch(`${BASE_URL}/products/company/${company}`, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const products = await response.json();
  return products;
};

// SEARCH PRODUCTS
const searchProducts = async (query) => {
  return fetch(`${BASE_URL}/products/search`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: query }),
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

const getProductById = async (id) => {

  const response = await fetch(`${BASE_URL}/products/product/${id}`, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const products = await response.json();
  return products;
};

export {
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getProductsByStore,
  searchProducts,
  getProductById
};

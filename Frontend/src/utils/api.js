const getAllProducts= async() => {
  const response = await fetch('http://localhost:3000/products', {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      "Content-type": "application/json"
    }
  });
  const products = await response.json();
  return products;

}

const getFeaturedProducts = async() => {
  const response = await fetch('http://localhost:3000/products/featured', {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      "Content-type": "application/json"
    }
  });
  const products = await response.json();
  return products;

}

export {getAllProducts, getFeaturedProducts}
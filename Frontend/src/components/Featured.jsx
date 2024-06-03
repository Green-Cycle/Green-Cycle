import './Featured.css';
import Cart from './Cart';
import Loading from './Loading'
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../utils/api';
import { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';

function Featured() {
  const [featured, setFeatured] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const { addItemToCart } = useCart();

  // FETCH FEATURED PRODUCTS DATA
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true) // SET LOADING TEXT TO TRUE
      const products = await getFeaturedProducts();
      setIsLoading(false) // SET LOADING TEXT TO FALSE
      setFeatured(products);
    }
    fetchData();
  }, []);

  return (
    <div className='featured'>
      <h2 className='featured__title'>DESTAQUES</h2>
      {isLoading && <Loading />}
      <div className='featured__card-list'>
        {featured.map((item) => (
          <ProductCard item={item} addItemToCart={addItemToCart} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default Featured;

import './Featured.css';
import Cart from './Cart';
import Loading from './Loading';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../utils/api';
import { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

function Featured() {
  const [featured, setFeatured] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addItemToCart } = useCart();

  // FETCH FEATURED PRODUCTS DATA
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); // SET LOADING TEXT TO TRUE
      const products = await getFeaturedProducts();
      setIsLoading(false); // SET LOADING TEXT TO FALSE
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
          <ProductCard
            item={item}
            addItemToCart={addItemToCart}
            key={item._id}
          />
        ))}
      </div>
      <Link to='/store' className='fetureed__store-link'>
        <p>IR PARA LOJA</p>
        <img src='/assets/arrowIcon.svg' alt='Arrow icon' />
      </Link>
    </div>
  );
}

export default Featured;

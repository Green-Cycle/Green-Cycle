import './Featured.css';
import Cart from './Cart';
import Loading from './Loading'
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
          <div className='featured__card' key={item._id}>
            <img src={item.cover} alt={item.name} />
            <div className='featured__container'>
              <div>
                <p className='featured__text'>{item.name}</p>
                <p>R${item.price}</p>
              </div>

              <button
                className='featured__button'
                onClick={() => addItemToCart(item)}
              >
                {' '}
                <img
                  src='../assets/shopping_bag.svg'
                  alt='shopping bag icon'
                  className='featured__icon'
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;

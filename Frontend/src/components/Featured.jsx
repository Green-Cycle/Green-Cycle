import './Featured.css';
import Cart from './Cart';
import { getFeaturedProducts } from '../utils/api';
import { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';

function Featured() {
  const [featured, setFeatured] = useState([]);
  const { addItemToCart } = useCart();
  useEffect(() => {
    async function fetchData() {
      const products = await getFeaturedProducts();
      setFeatured(products);
    }
    fetchData();
  }, []);

  const CardList = ({ item }) => {
    <div className='featured__card'>
      <img
        src='https://www.wearlalli.com/wp-content/uploads/2015/08/DSC_0051-copy-470x626@2x.jpg'
        alt='skirt'
      />
      <p>Skirt</p>
      <p>$500</p>
    </div>;
  };

  return (
    <div className='featured'>
      <h2 className='featured__title'>DESTAQUES</h2>
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

        {featured.map((item) => {
          return <CardList key={item.key} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Featured;

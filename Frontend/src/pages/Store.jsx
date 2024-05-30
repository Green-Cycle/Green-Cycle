import './Store.css';
import { useEffect, useState } from 'react';
import { getAllProducts, getProductsByCategory } from '../utils/api';
import { useCart } from '../contexts/CartContext';
function Store() {
  const { addItemToCart } = useCart();
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = ['Calçados', 'clothes', 'jewelry'];
  useEffect(() => {
    async function fetchData() {
      const products = await getAllProducts();
      setAllProducts(products);
    }
    fetchData();
  }, []);
  const fetchProductsByCategory = async (category) => {
    try {
      const products = await getProductsByCategory(category);
      console.log('Produtos recebidos:', products);
      setAllProducts(products);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchProductsByCategory(category);
  };

  return (
    <>
      <div className='lojamain'>
        <h2 className='lojamain__title'>Produtos de nossos parceiros</h2>
        <div className='lojamain__container'>
          {' '}
          <div className='lojamain__categories'>
            <span>Categorias:</span>
            {categories.map((category, index) => (
              <button key={index} onClick={() => handleCategoryClick(category)}>
                {category}
              </button>
            ))}
          </div>
          <div className='lojamain__card-list'>
            {allProducts.map((item) => (
              <div className='featured__card' key={item._id}>
                <img src={item.cover} alt={item.name} />
                <div className='featured__container'>
                  <div>
                    <p className='featured__text'>{item.name}</p>
                    <p>${item.price}</p>
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
      </div>
    </>
  );
}

export default Store;

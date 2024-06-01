import './Store.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  getAllProducts,
  getProductsByCategory,
  getProductsByStore,
  searchProducts,
} from '../utils/api';

import { useCart } from '../contexts/CartContext';
function Store() {
  const { addItemToCart } = useCart();
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const categories = [
    'Acessórios',
    'Calçados',
    'Móveis',
    'Roupas',
    'Utilidades',
  ];
  const stores = ['Loja 1', 'Loja 2', 'Loja 3', 'Loja 4', 'Loja 5'];
  
  // INITIALIZE USESEARCH PARAMS
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')

  useEffect(() => {
    // Define fetchData as an async function
    async function fetchData() {
      try {
        if (query === null) {
          // Fetch all products
          const products = await getAllProducts();
          setAllProducts(products);
        } else {
          // Fetch search results
          console.log('search');
          const searchResults = await searchProducts(query);
          setAllProducts(searchResults);
        }
      } catch (error) {
        // Handle any errors (e.g., show an error message)
        console.error('Error fetching data:', error);
      }
    }
  
    // Call fetchData immediately
    fetchData();
  }, [query]); // Include query as a dependency

  const fetchProductsByCategory = async (category) => {
    try {
      console.log(category);
      const products = await getProductsByCategory(category);
      console.log('Produtos recebidos:', products);
      setAllProducts(products);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  const fetchProductsByCompany = async (company) => {
    try {
      const products = await getProductsByStore(company);

      setAllProducts(products);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchProductsByCategory(category);
  };
  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    fetchProductsByCompany(company);
  };
  return (
    <>
      <div className='lojamain'>
        <h2 className='lojamain__title'>PRODUTOS DE NOSSOS PARCEIROS</h2>
        <div className='lojamain__container'>
          <div className='lojamain__categories'>
            <span>CATEGORIAS:</span>
            <div className='lojamain__order'>
              {' '}
              {categories.map((category, index) => (
                <button
                  className='lojamain__button'
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <span className='lojamain__store-list'>LOJAS:</span>
            <div className='lojamain__order'>
              {' '}
              {stores.map((company, index) => (
                <button className='lojamain__button' key={index} onClick={() => handleCompanyClick(company)}>
                  {company}
                </button>
              ))}
            </div>
          </div>
          <div className='lojamain__card-list'>
            {allProducts.map((item) => (
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
      </div>
    </>
  );
}

export default Store;

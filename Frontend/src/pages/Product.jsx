import './Product.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, Suspense} from 'react';
import { getProductById } from '../utils/api';
import Loading from '../components/Loading'
import { useCart } from '../contexts/CartContext';


function Product() {
  const [product, setProduct] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const userId = useParams();
  const { addItemToCart } = useCart();

  useEffect(() => {
    const getProduct = async() =>{
      setLoading(true)
      const productArray = await getProductById(userId.id)
      const product = productArray[0]
      setLoading(false)
      setProduct(product)
    }
    getProduct();
  },[])

  return (
    loading ? <Loading /> : <div className='product'>
    <div className='product__image'>
      <img src={product.cover}></img>
    </div>
    <div className='product__details'>
      <h1 className='product__title'>{product.name}</h1>
      <p className='product__price'>R${product.price}</p>
      <p className='product__description'>{product.description}</p>
      <div className='product__buttons'>
        <button className='product__button' onClick={() => {navigate('/store')}}>VOLTAR</button>
        <button className='product__button product__button-add' onClick={() => {addItemToCart(product)}}>Adicionar ao carrinho</button>
      </div>
    </div>
  </div>
  )
}

export default Product

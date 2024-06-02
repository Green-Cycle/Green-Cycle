import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({item, addItemToCart}) {
  const [itemAdded, setItemAdded] = useState(false)

  const navigate = useNavigate();

  // ADD VISUAL FEEDBACK WHEN USER ADDS ITEM TO CART
  const onAddingItem = () => {
    setItemAdded(true)
    addItemToCart(item)
    setTimeout(()=>{setItemAdded(false)},1000)
  }

  return (
    <div className='featured__card'>
      {itemAdded && <div style={{position: 'fixed', height: '100%', width: '100%', top: 0, right: 0, backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '12px'}}>
        <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <p style={{fontSize: '1rem'}}>Item added to cart!</p>
        </div>
      </div>}
      <img src={item.cover} alt={item.name} onClick={()=>navigate(`/product/${item._id}`)}/>
      <div className='featured__container'>
        <div className='featured__description-wrapper'>
          <p className='featured__text'>{item.name}</p>
          <p className='featured__price'>R${item.price}</p>
        </div>

        <button
          className='featured__button'
          onClick={onAddingItem}
          >
          <img
            src='/assets/addToCart.svg'
            alt='add to cart icon'
            className='featured__icon'
            />
        </button>
      </div>
    </div>
  )
}

export default ProductCard

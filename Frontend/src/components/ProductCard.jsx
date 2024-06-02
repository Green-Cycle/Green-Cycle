import './ProductCard.css';

function ProductCard({item, addItemToCart}) {
  return (
    <div className='featured__card'>
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
            src='/assets/shopping_bag.svg'
            alt='shopping bag icon'
            className='featured__icon'
            />
        </button>
      </div>
    </div>
  )
}

export default ProductCard

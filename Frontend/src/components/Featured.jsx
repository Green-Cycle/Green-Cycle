import './Featured.css'
import { getFeaturedProducts } from '../utils/api'
import { useEffect, useState } from 'react'

function Featured() {
  const [featured, setFeatured] = useState([])
  useEffect(() => {
    async function fetchData() {
      const products = await getFeaturedProducts()
      setFeatured(products)
    }
    fetchData();
    
  }, [])

  const CardList = ({item}) => {
    <div className='featured__card'>
      <img src="https://www.wearlalli.com/wp-content/uploads/2015/08/DSC_0051-copy-470x626@2x.jpg" alt="skirt" />
      <p>Skirt</p>
      <p>$500</p>
    </div>
  }

  return (
    <div className='featured'>
      <h2 className='featured__title'>DESTAQUES</h2>
      <div className='featured__card-list'>
        {featured.map((item) => (
          <div className='featured__card' key={item._id}>
            <img src={item.cover} alt="skirt" />
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}

        {
          featured.map((item) => {
            return (
              <CardList key={item.key} item={item} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Featured

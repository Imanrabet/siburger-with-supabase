import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react'

// components
import BurgerCard from '../components/BurgerCard'

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [foods, setFoods] = useState(null)
  const [orderBy, setOrderBy] = useState('created_at')

  const handleDelete = (id) => {
    setFoods(prevfood => {
      return prevfood.filter(sm => sm.id !== id)
    })
  }

  useEffect(() => {
    const fetchFoods = async () => {
      const { data, error } = await supabase
        .from('foods')
        .select()
        .order(orderBy, {ascending: false})
        console.log(data);
      
      if (error) {
        setFetchError('غذایی موجود نیست')
        setFoods(null)
      }
      if (data) {
        setFoods(data)
        setFetchError(null)
      }
    }


    fetchFoods()

  }, [])

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {foods && (
        <div className="smoothies">
          <div className="order-by">
            <p>Order by:</p>
            <button onClick={() => setOrderBy('created_at')}>Time Created</button>
            <button onClick={() => setOrderBy('title')}>Title</button>
            <button onClick={() => setOrderBy('rating')}>Rating</button>
          </div>
          <div className="smoothie-grid">
            {foods.map(food => (
              <BurgerCard key={food.id} food={food} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home

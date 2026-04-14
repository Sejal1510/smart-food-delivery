import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const API = 'https://smart-food-delivery-backend.onrender.com'

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) { navigate('/login'); return }
    axios.get(`${API}/api/restaurants`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setRestaurants(res.data))
      .catch(() => navigate('/login'))
      .finally(() => setLoading(false))
  }, [])

  const logout = () => { localStorage.clear(); navigate('/login') }

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <span style={styles.logo}>🍔 SmartEats</span>
        <span>👋 {user.name}</span>
        <button onClick={logout} style={styles.logoutBtn}>Logout</button>
      </div>
      <h2 style={styles.heading}>Restaurants Near You</h2>
      {loading ? <p style={styles.center}>Loading...</p> : (
        <div style={styles.grid}>
          {restaurants.length === 0 ? (
            <p style={styles.center}>No restaurants found. Ask your professor to seed some data! 😄</p>
          ) : restaurants.map(r => (
            <div key={r._id} style={styles.card} onClick={() => navigate(`/menu/${r._id}`)}>
              <div style={styles.emoji}>🍽️</div>
              <h3 style={styles.name}>{r.name}</h3>
              <p style={styles.city}>📍 {r.city}</p>
              <p style={styles.items}>{r.menu?.length || 0} items on menu</p>
              <button style={styles.btn}>View Menu →</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const styles = {
  container: { minHeight: '100vh', background: '#fff8f0', fontFamily: 'sans-serif' },
  navbar: { background: '#f97316', color: '#fff', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  logo: { fontSize: '1.5rem', fontWeight: 'bold' },
  logoutBtn: { background: '#fff', color: '#f97316', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  heading: { textAlign: 'center', padding: '2rem', color: '#333', fontSize: '1.8rem' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '1.5rem', padding: '0 2rem 2rem', justifyContent: 'center' },
  card: { background: '#fff', borderRadius: '16px', padding: '1.5rem', width: '250px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', cursor: 'pointer', textAlign: 'center', transition: 'transform 0.2s' },
  emoji: { fontSize: '3rem' },
  name: { color: '#333', margin: '0.5rem 0' },
  city: { color: '#888', margin: '0.25rem 0' },
  items: { color: '#f97316', margin: '0.5rem 0' },
  btn: { marginTop: '1rem', background: '#f97316', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  center: { textAlign: 'center', color: '#888', padding: '2rem' }
}
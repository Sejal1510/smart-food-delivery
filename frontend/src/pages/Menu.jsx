import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const API = 'https://smart-food-delivery-backend.onrender.com'

export default function Menu() {
  const { restaurantId } = useParams()
  const [restaurant, setRestaurant] = useState(null)
  const [cart, setCart] = useState([])
  const [ordering, setOrdering] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) { navigate('/login'); return }
    axios.get(`${API}/api/restaurants/${restaurantId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setRestaurant(res.data))
      .catch(() => navigate('/restaurants'))
  }, [])

  const addToCart = (item) => {
    const exists = cart.find(c => c.name === item.name)
    if (exists) {
      setCart(cart.map(c => c.name === item.name ? { ...c, qty: c.qty + 1 } : c))
    } else {
      setCart([...cart, { ...item, qty: 1 }])
    }
  }

  const removeFromCart = (name) => {
    setCart(cart.filter(c => c.name !== name))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const placeOrder = async () => {
  setOrdering(true)
  try {
    console.log("USER FROM STORAGE:", localStorage.getItem("user"))
    const user = JSON.parse(localStorage.getItem("user"))

    await axios.post(`${API}/api/orders`, {
  user: user._id,
  restaurant: restaurantId,
  items: cart.map(c => ({
    itemName: c.name,
    price: c.price,
    quantity: c.qty
  })),
  totalAmount: total,
  deliveryAddress: "Shrigonda, Maharashtra"  // 🔥 ADD THIS
}, {
  headers: { Authorization: `Bearer ${token}` }
})

    setOrderSuccess(true)
    setCart([])
    setTimeout(() => setOrderSuccess(false), 3000)

  } catch (err) {
    alert('Order failed: ' + (err.response?.data?.message || 'Try again'))
  } finally {
    setOrdering(false)
  }
}

  if (!restaurant) return <p style={{ textAlign: 'center', padding: '2rem' }}>Loading menu...</p>

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <button onClick={() => navigate('/restaurants')} style={styles.backBtn}>← Back</button>
        <span style={styles.logo}>🍔 {restaurant.name}</span>
        <span style={{ color: '#fff' }}>📍 {restaurant.city}</span>
      </div>

      {orderSuccess && <div style={styles.successBanner}>✅ Order placed successfully!</div>}

      <div style={styles.layout}>
        <div style={styles.menuSection}>
          <h2 style={styles.heading}>Menu</h2>
          {restaurant.menu?.length === 0 ? (
            <p style={styles.empty}>No items on menu yet!</p>
          ) : restaurant.menu?.map((item, i) => (
            <div key={i} style={styles.menuItem}>
              <div>
                <p style={styles.itemName}>{item.name}</p>
                <p style={styles.itemPrice}>₹{item.price}</p>
              </div>
              <button onClick={() => addToCart(item)} style={styles.addBtn}>+ Add</button>
            </div>
          ))}
        </div>

        <div style={styles.cartSection}>
          <h2 style={styles.heading}>🛒 Your Cart</h2>
          {cart.length === 0 ? (
            <p style={styles.empty}>Cart is empty</p>
          ) : (
            <>
              {cart.map((item, i) => (
                <div key={i} style={styles.cartItem}>
                  <span>{item.name} × {item.qty}</span>
                  <span>₹{item.price * item.qty}</span>
                  <button onClick={() => removeFromCart(item.name)} style={styles.removeBtn}>✕</button>
                </div>
              ))}
              <div style={styles.total}>Total: ₹{total}</div>
              <button onClick={placeOrder} disabled={ordering} style={styles.orderBtn}>
                {ordering ? 'Placing Order...' : 'Place Order 🚀'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: { minHeight: '100vh', background: '#fff8f0', fontFamily: 'sans-serif' },
  navbar: { background: '#f97316', color: '#fff', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  logo: { fontSize: '1.3rem', fontWeight: 'bold', color: '#fff' },
  backBtn: { background: '#fff', color: '#f97316', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  layout: { display: 'flex', gap: '2rem', padding: '2rem', flexWrap: 'wrap' },
  menuSection: { flex: 2, minWidth: '280px' },
  cartSection: { flex: 1, minWidth: '240px', background: '#fff', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', alignSelf: 'flex-start' },
  heading: { color: '#333', marginBottom: '1rem' },
  menuItem: { background: '#fff', borderRadius: '12px', padding: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
  itemName: { fontWeight: 'bold', color: '#333', margin: 0 },
  itemPrice: { color: '#f97316', margin: '4px 0 0' },
  addBtn: { background: '#f97316', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  cartItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #eee' },
  removeBtn: { background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: '6px', padding: '4px 8px', cursor: 'pointer' },
  total: { fontWeight: 'bold', fontSize: '1.1rem', margin: '1rem 0', color: '#333' },
  orderBtn: { width: '100%', padding: '12px', background: '#f97316', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', fontWeight: 'bold' },
  empty: { color: '#aaa', textAlign: 'center', padding: '1rem' },
  successBanner: { background: '#d1fae5', color: '#065f46', padding: '1rem', textAlign: 'center', fontWeight: 'bold', fontSize: '1.1rem' }
}


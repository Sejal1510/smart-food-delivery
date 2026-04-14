import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const API = 'https://smart-food-delivery-backend.onrender.com'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await axios.post(`${API}/api/auth/login`, form)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      navigate('/restaurants')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.logo}>🍔 SmartEats</h1>
        <h2 style={styles.title}>Welcome back!</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          {error && <p style={styles.error}>{error}</p>}
          <button style={styles.button} type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p style={styles.link}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f97316' },
  card: { background: '#fff', padding: '2rem', borderRadius: '16px', width: '360px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' },
  logo: { textAlign: 'center', fontSize: '2rem', marginBottom: '0.5rem' },
  title: { textAlign: 'center', color: '#333', marginBottom: '1.5rem' },
  input: { width: '100%', padding: '12px', marginBottom: '1rem', border: '2px solid #eee', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box' },
  button: { width: '100%', padding: '12px', background: '#f97316', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', fontWeight: 'bold' },
  error: { color: 'red', marginBottom: '1rem', textAlign: 'center' },
  link: { textAlign: 'center', marginTop: '1rem', color: '#666' }
}
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Restaurants from './pages/Restaurants'
import Menu from './pages/Menu'
import OwnerDashboard from "./pages/OwnerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/menu/:restaurantId" element={<Menu />} />
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
        <Route path="*" element={<h1>Route Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
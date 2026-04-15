import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://smart-food-delivery-backend.onrender.com";

export default function OwnerDashboard() {
  const [restaurants, setRestaurants] = useState([]);
const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // For now just get all restaurants and pick first (we'll improve later)
    axios.get(`${API}/api/restaurants`)
      .then(res => {
        setRestaurants(res.data); 
      })
      .catch(err => console.log(err));
  }, []);


  if (restaurants.length === 0) return <p>Loading dashboard...</p>;

  return (
  <div style={{ padding: "2rem" }}>
    <h1>🏪 Owner Dashboard</h1>

    {!selectedRestaurant ? (
      <>
        <h2>Select a Restaurant</h2>

        {restaurants.map((r) => (
          <div key={r._id} style={{ marginBottom: "10px" }}>
            <button onClick={() => setSelectedRestaurant(r)}>
              {r.name} ({r.city})
            </button>
          </div>
        ))}
      </>
    ) : (
      <>
        <button onClick={() => setSelectedRestaurant(null)}>⬅ Back</button>

        <h2>{selectedRestaurant.name}</h2>
        <p>📍 {selectedRestaurant.city}</p>

        <h3>Menu Items</h3>

        {selectedRestaurant.menu.map((item, i) => (
          <div key={i}>
            {item.itemName} - ₹{item.price}
          </div>
        ))}
        
      </>
    )}
  </div>
);
}
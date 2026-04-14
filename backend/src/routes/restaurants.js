const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find(); // ✅ FIXED
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get single restaurant with menu
router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found!' });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Add restaurant (admin only)
router.post('/', async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(201).json({ message: 'Restaurant added!', restaurant });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
const express = require('express');
const Profile = require('../models/Profile');
const router = express.Router();

// Get all profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new profile
router.post('/', async (req, res) => {
  const { name, role, description, address, coordinates, imageUrl } = req.body;
  const profile = new Profile({ name, role, description, address, coordinates, imageUrl });

  try {
    const newProfile = await profile.save();
    res.status(201).json(newProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a profile
router.put('/:id', async (req, res) => {
  try {
    const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a profile
router.delete('/:id', async (req, res) => {
  try {
    await Profile.findByIdAndDelete(req.params.id);
    res.json({ message: 'Profile deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

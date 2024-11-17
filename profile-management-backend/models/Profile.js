const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  description: { type: String },
  address: { type: String },
  coordinates: {
    lat: { type: Number },
    lng: { type: Number }
  },
  imageUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/profiles';

// Fetch all profiles
export const getProfiles = async () => await axios.get(API_URL);

// Create a new profile
export const createProfile = async (profile) => await axios.post(API_URL, profile);

// Update a profile
export const updateProfile = async (id, profile) => await axios.put(`${API_URL}/${id}`, profile);

// Delete a profile
export const deleteProfile = async (id) => await axios.delete(`${API_URL}/${id}`);

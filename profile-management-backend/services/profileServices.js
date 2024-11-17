import axios from 'axios';

const API_URL = 'http://localhost:5000/api/profiles';

export const getProfiles = async () => await axios.get(API_URL);

export const createProfile = async (profile) => await axios.post(API_URL, profile);

export const updateProfile = async (id, profile) => await axios.put(`${API_URL}/${id}`, profile);

export const deleteProfile = async (id) => await axios.delete(`${API_URL}/${id}`);

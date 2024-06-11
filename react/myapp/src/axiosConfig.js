// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000', // Adjust if your Django server runs at a different address
});

export default instance;

import axios from 'axios';

const token = localStorage.getItem('access_token');

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: token ? `Bearer ${token}` : null,
	},
});

export default axiosInstance;

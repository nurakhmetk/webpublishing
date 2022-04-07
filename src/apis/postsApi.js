import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://saurav.tech/NewsAPI/',
});

export default instance;

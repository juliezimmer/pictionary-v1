import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.unsplash.com/',
   headers:  { 
      Authorization: 'Client-ID a010665274225790939fc6b46a627c3170d1b391dcf1b092068d5e6fb2583d0c'
   }
})
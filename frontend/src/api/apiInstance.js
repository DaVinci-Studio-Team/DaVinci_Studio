import axios from 'axios'

  export const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_SERVER_URL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  })
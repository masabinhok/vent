import { useAuth } from "@/store/authStore";
import axios from "axios";

// create api client with baseURL and withCredentials true for all request.
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});


// interceptor to handle 
api.interceptors.response.use((res) => res, async (error) => {
  const originalRequest = error.config;
  if(error.response?.status === 401 && !originalRequest._retry){
    originalRequest._retry = true;
    try {
      await useAuth.getState().refreshToken();
      return api(originalRequest);
    }catch(error){
      useAuth.getState().logout();
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
});

export default api;
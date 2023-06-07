import axios from "axios"; 
import { rootApi } from "../api"; 
 
export const authServices = () => { 
  const registration = (userData) => { 
    return axios.post(`${rootApi}/register`, userData); 
  }; 
  return { 
    registration, 
  } 
}; 
export const authServiceLogin = () => { 
  const login = (loginData) => { 
    return axios.post(`${rootApi}/login`, loginData); 
  }; 
  return { 
    login, 
  } 
}
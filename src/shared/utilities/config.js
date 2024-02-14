import axios from 'axios';
import {BASE_URL} from './endpoints';

// Import the Redux store (assuming 'store' is exported as the Redux store)
import {store} from '../../store/store';
import NavigationService from '../../navigators/NavigationService';
import { showToast } from '../../components/Toast';
// Create an Axios instance with the base URL
const HTTP_CLIENT = axios.create({
  baseURL: BASE_URL,
});

// Function to initialize Axios setup
const initialConfig = () => {
  // Dispatch an "INITIALIZE" action to ensure the Redux store is ready
  store?.dispatch({type: 'INITIALIZE'});

  // Set up Axios interceptors for request headers
  setupAxiosInterceptors();
};

// Function to set up Axios interceptors
const setupAxiosInterceptors = () => {
  // Intercept outgoing requests
  console.log('BASE', BASE_URL);
  
};
HTTP_CLIENT.interceptors.request.use(
  config => {
    // Get user information from the Redux store
    const {userInfo} = store?.getState().auth;
    console.log('rrr')
    // Check if there's a token in the user info
    if (userInfo?.token) {
      // Set the Authorization header with the user's token
      config.headers.Authorization = `Bearer ${userInfo?.token}`;
    }
    return config;
  },
  err => {Promise.reject(err);console.log('rrr2')},
  
);
HTTP_CLIENT.interceptors.response.use(
  function (response) {
    // Do something with the successful response (status code 200)
    console.log('success');
    return response.data;
  },
  function (error) {
    // Do something with the error response
    console.log('error',error.response.status);
    if (error.response && error.response.status !== 200) {
      // Handle the non-200 status code here
      // You can choose to return no result or handle the error in a specific way
      if (error.response && error.response.status == 401) {
        console.log('adadas', error.response.data);
        showToast('error','Error',error.response.data.message);
        NavigationService.reset('Auth')
        return Promise.reject(error.response.data);
      }
      if (error.response && error.response.status == 404) {
        console.log('adadas', error.response.data);
        showToast('error','Error',error.response.data.message);
        return Promise.reject(error.response.data);
      }
      if (error.response && error.response.status >= 500) {
        console.log('adadas', error.response.data);
        showToast('error','Error','Something went wrong');
        return Promise.reject(error.response.data);
      }
      else{
        console.log('adadas', error.response.data);
        showToast('error',error.response.data.message);
        return Promise.reject(error.response.data);
      }
    }
    // If the status code is 200, just pass the error along
    else {return Promise.reject(error);}
  },
);
export {HTTP_CLIENT, setupAxiosInterceptors, initialConfig};

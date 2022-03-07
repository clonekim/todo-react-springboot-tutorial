import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API,
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default client;

import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.142.68:5000/",
});

export default instance
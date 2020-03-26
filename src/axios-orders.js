import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-84934.firebaseio.com/"
});

export default instance;

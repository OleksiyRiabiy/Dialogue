import axios from "axios";

const instance = axios.create({
  baseURL: "https://dialogue-pizza-sushi-default-rtdb.firebaseio.com/",
});

export default instance;

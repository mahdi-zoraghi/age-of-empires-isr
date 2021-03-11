import axios from "axios";

export default axios.create({
  baseURL: "https://age-of-empires-2-api.herokuapp.com/api/v1",
});

import Axios from "axios";

const axios = Axios.create({
  baseURL:
    "https://0jj5dyvv79.execute-api.eu-west-1.amazonaws.com/dev/items",
  headers: { "Content-Type": "application/json" },
});

axios.interceptors.response.use(({ data }) => data)

export default axios
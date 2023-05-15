import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3e702cc000ec4f4793024792e77b0ad8",
  },
});

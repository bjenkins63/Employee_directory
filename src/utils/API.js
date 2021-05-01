import axios from "axios";
const BASEURL = "https://api.randomuser.me/?results=12";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};

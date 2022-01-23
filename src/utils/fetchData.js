import axios from "axios";

export const fetchData = (url, setState) => {
  axios.get(url).then((res) => setState(res.data));
};

import axios from "axios";

const url = "https://fakestoreapi.com/products";

const fetchData = async () => {
  return await axios.get(url).then((res) => res.data);
};

export default fetchData;

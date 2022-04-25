import axios from "axios";
import { productsTypeFetch } from "../types";

const url = "https://fakestoreapi.com/products";

const fetchData = async ():Promise<productsTypeFetch> => {
  return await axios.get(url).then((res) => res.data);
};

export default fetchData;

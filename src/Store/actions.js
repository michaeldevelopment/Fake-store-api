import axios from "axios";

const url = "https://fakestoreapi.com/products";

export const loadProducts = (products) => ({
  type: "loadProducts",
  payload: products,
});

export const showLoader = () => ({
  type: "showLoader",
  payload: true,
});

export const hideLoader = () => ({
  type: "hideLoader",
  payload: false,
});

export const fetchProducts = () => async (dispatch) => {
  // try {
  //   dispatch(showLoader());
  //   const products = await axios.get(url).then((res) => res.data);
  // } finally {
  //   dispatch(hideLoader());
  // }

  // Applying first SOLID method -> each functionality has its own responsibility
  // Is more understandable and legible

  try {
    dispatch(showLoader());
    const products = await fetchData(url);
    dispatch(loadProducts(products));
  } finally {
    dispatch(hideLoader());
  }
};

const fetchData = async (url) => {
  return await axios
    .get(url)
    .catch((error) => {
      if (error.code === "404")
        throw new Error("Something has crashed at the data fetching. Sorry.");
    })
    .then((res) => res.data);
};

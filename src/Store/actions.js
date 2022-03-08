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
  dispatch(showLoader());

  try {
    const products = await axios.get(url).then((res) => res.data);
    dispatch(loadProducts(products));
  } finally {
    dispatch(hideLoader());
  }
};

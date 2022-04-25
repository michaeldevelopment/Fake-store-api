import React, {
  useState,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from "react";

import { contextInterface } from "../types";

const initValue = {
  products: [],
  getProducts: () => null,
};

export const productsContext = createContext<contextInterface>(initValue);

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = useCallback((products) => {
    setProducts(products);
  }, []);

  const contextValue = useMemo(
    () => ({ products, getProducts }),
    [products, getProducts]
  );

  return (
    <>
      <productsContext.Provider value={contextValue}>
        {children}
      </productsContext.Provider>
    </>
  );
};

export const ProductsConsumer = () => useContext(productsContext);

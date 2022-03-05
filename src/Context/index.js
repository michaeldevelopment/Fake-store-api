import React, {
  useState,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from "react";

export const productsContext = createContext();

export const ProductsProvider = ({ children }) => {
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

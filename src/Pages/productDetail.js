import { useParams } from "react-router-dom";
import Product from "../Components/Product";

import { motion } from "framer-motion";

export default function ProductDetail({ products }) {
  const { id } = useParams();

  const productData = products?.find((p) => p.id === Number(id));

  const productDataProps = {
    image: productData.image,
    title: productData.title,
    description: productData.description,
    price: productData.price,
    category: productData.category,
    rating: productData.rating,
  };

  return (
    <motion.div
      className="productDetail mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Product {...productDataProps} />
    </motion.div>
  );
}

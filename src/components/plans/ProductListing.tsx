import { useState } from "react";
import ProductItem, { Product } from "./ProductItem";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../graphql/query";
import NewProductForm from "./NewProductForm";

const sidebarVariants = {
  hidden: {
    x: "100%",
    opacity: 1,
    transition: {
      type: "tween",
      // ease: 'e',
      duration: 0.3,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

const ProductListing = () => {
  const [showCreateProduct, setShowCreateProduct] = useState(false);
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);
  const products = data?.findProducts;
  const sortedProducts = products?.slice().sort(
    (a:Product, b:Product) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return (
    <div className="relative bg-white border rounded-sm border-stroke dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center border-b border-stroke py-2 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Available Products
        </h3>
        <button
          onClick={() => setShowCreateProduct(true)}
          className="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Create Product
        </button>
      </div>
      <div className="flex flex-col gap-2 p-6.5 h-full overflow-y-auto custom-scrollbar">
        {!loading ? (
          sortedProducts?.map((product: Product) => (
            <div key={product.id}>
              <ProductItem product={product} />
            </div>
          ))
        ) : (
          <>Loading...</>
        )}
      </div>

      <AnimatePresence>
        {showCreateProduct && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sidebarVariants}
            className="absolute top-0 bottom-0 right-0 z-10 w-full bg-white"
          >
            <NewProductForm setShowCreateProduct={setShowCreateProduct} />
            {/* Done button */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductListing;

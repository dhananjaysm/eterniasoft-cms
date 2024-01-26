import { useQuery } from "@apollo/client";
import ProductOne from "../images/product/product-01.png";
import ProductTwo from "../images/product/product-02.png";
import ProductThree from "../images/product/product-03.png";
import ProductFour from "../images/product/product-04.png";
import { GET_ALL_PRODUCTS } from "../../../graphql/query";
import { Product } from "../../plans/ProductItem";
import ProductTableRow from "./ProductTableRow";
import { motion } from "framer-motion";
import { useState } from "react";
import AddProductForm from "./AddProductForm";

const ProductsTable = () => {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);
  const products = data?.findProducts;
  const [showForm, setShowForm] = useState(false);

  // Animation variants for the overlay
  const formVariants = {
    hidden: { width: 0 },
    visible: {
      width: "50%",
      transition: { duration: 0.5 },
    },
  };

  // Toggle form overlay
  const toggleFormOverlay = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="flex ">
      <div
        className={`flex-grow ${
          showForm ? "w-1/2" : "w-full "
        } transition-all duration-500 ease-in-out`}
      >
        <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex justify-between items-center py-6 px-4 md:px-6 xl:px-7.5">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              All Products
            </h4>
            <button
              onClick={() => setShowForm(!showForm)} // Toggle form visibility
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Add Product
            </button>
          </div>

          <div className="overflow-auto">
            <div className={`grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5 ${!showForm ? "sm:grid-cols-8" : "sm:grid-cols-6"}`}>
              <div className="flex items-center col-span-3">
                <p className="font-medium">Product Name</p>
              </div>
              {!showForm && (
                <>
                  <div className="items-center hidden col-span-2 sm:flex">
                    <p className="font-medium">Description</p>
                  </div>
                  <div className="flex items-center col-span-1">
                    <p className="font-medium">Price</p>
                  </div>
                  <div className="flex items-center col-span-1">
                    <p className="font-medium">Subscriptions</p>
                  </div>
                </>
              )}
                  <div className={ `flex items-center  ${!showForm ? "col-span-1": "col-span-3" }`}>
                    <p className="font-medium">Action</p>
                  </div>
            </div>

            {products &&
              products.map((product: Product) => (
                <div key={product.id}>
                  <ProductTableRow showForm={showForm} product={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
      {showForm && (
        <motion.div
          className="w-1/2 overflow-auto "
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Your form content here */}
          <AddProductForm />
          {/* Form fields */}
        </motion.div>
      )}
    </div>
  );
};

export default ProductsTable;

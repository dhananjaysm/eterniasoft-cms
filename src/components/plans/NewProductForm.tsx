import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_PRODUCT_MUTATION } from "../../graphql/mutations";
import { GET_ALL_PRODUCTS } from "../../graphql/query";
import { Product } from "./ProductItem";
interface NewProductFormProps {
  setShowCreateProduct: React.Dispatch<React.SetStateAction<boolean>>;
}
type ProductsQueryData = {
  findProducts: Product[];
};
const NewProductForm: React.FC<NewProductFormProps> = ({
  setShowCreateProduct,
}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>();
  const [description, setDescription] = useState("");
  const [maxUsers, setMaxUsers] = useState<number>();
  const [productFeatures, setProductFeatures] = useState([]);
  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        // Handle completion, e.g., show a success message or reset form fields
        console.log("Product created successfully");
        // Reset form fields
        setName("");
        setPrice(undefined);
        setDescription("");
        setMaxUsers(undefined);
        setProductFeatures([]);
      },
      update: (cache, { data: { createProduct } }) => {
        // Retrieve existing products from the cache
        const existingProducts = cache.readQuery<ProductsQueryData>({
          query: GET_ALL_PRODUCTS,
        });

        // Add the new product to the cache
        if (existingProducts && createProduct) {
          cache.writeQuery({
            query: GET_ALL_PRODUCTS,
            data: {
              findProducts: [...existingProducts.findProducts, createProduct],
            },
          });
        }
      },
    }
  );
  console.log(data);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Convert price and maxUsers to appropriate types if necessary

    const productData = {
      name: name,
      price: price,
      description: description,
      maxUsers: maxUsers,
      productFeatures, // Ensure this array is structured correctly for the mutation
    };

    try {
      await createProduct({ variables: { productData } });
      setShowCreateProduct(false);
    } catch (error) {
      console.error("Error creating product:", error);
      // Handle error, e.g., show error message
    }
  };

  return (
    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">New Product</h3>
        <button
          onClick={() => setShowCreateProduct(false)}
          className="px-4 py-2 font-medium text-white bg-red-600 rounded hover:bg-red-700"
        >
          Cancel
        </button>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="p-6.5">
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-2.5 block text-black dark:text-white">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-2.5 block text-black dark:text-white">
              Price
            </label>
            <input
              type="number"
              value={price !== undefined ? price : ""}
              onChange={(e) =>
                setPrice(
                  e.target.value === "" ? undefined : Number(e.target.value)
                )
              }
              placeholder="Enter Product Price"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Max Users
            </label>
            <input
              type="number"
              value={maxUsers !== undefined ? maxUsers : ""}
              onChange={(e) =>
                setMaxUsers(
                  e.target.value === "" ? undefined : Number(e.target.value)
                )
              }
              placeholder="Enter Max Users"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <button className="flex items-center justify-center w-full gap-2 p-3 font-medium rounded bg-primary text-gray">
            <span>Create Product</span>
            <span>
              {loading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              ) : null}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProductForm;

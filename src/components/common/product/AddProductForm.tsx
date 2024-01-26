import React from "react";

const AddProductForm = () => {
  return (
    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Add New Product</h3>
      </div>
      <form action="#">
        <div className="p-6.5">
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Product Description
            </label>
            <input
              type="text"
              placeholder="Enter product description"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Price
            </label>
            <input
              type="number"
              placeholder="Enter Product Price"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="mb-5.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Usage Limit
            </label>
            <input
              type="number"
              placeholder="Enter Usage Limit"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <button className="flex justify-center w-full p-3 font-medium rounded bg-primary text-gray">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;

import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import TableOne from '../../components/TableOne'
import TableThree from '../../components/TableThree'
import TableTwo from '../../components/TableTwo'
import ProductsTable from '../../components/common/product/ProductsTable'

const Products = () => {
  return (
    <>
    <Breadcrumb pageName="Products" />

    <div className="flex flex-col gap-10">
      <ProductsTable />
    </div>
  </>
  )
}

export default Products
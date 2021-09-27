import React, { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default function FilterableProductTable(props) {
  const { products } = props;

  const [ inStockOnly, setInStockOnly ] = useState(false)

  const handleInStockChange = (value) => {
    setInStockOnly(value)
  }

  return (
    <div>
      <SearchBar inStockOnly={ inStockOnly }
        onInStockChange={handleInStockChange}
      />
      <ProductTable
      inStockOnly={inStockOnly}
       products={products} />
    </div>
  )
}

import React from 'react';
import { useState } from 'react';
import SearchBar from '../searchBar/searchBar';
import ProductTable from './productTable.js/ProductTable';

// import './style.css'
function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
      <div>
        <SearchBar 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onFilterTextChange={setFilterText} 
          onInStockOnlyChange={setInStockOnly} />
        <ProductTable 
          products={products} 
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    );
  }

export default FilterableProductTable;
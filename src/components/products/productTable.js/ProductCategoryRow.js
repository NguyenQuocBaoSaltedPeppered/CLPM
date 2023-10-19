import React from 'react';
// import './style.css'
function ProductCategoryRow({ category }) {
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }

export default ProductCategoryRow;
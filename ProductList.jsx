import React from 'react';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p className="text-center text-gray-500">No Product Found</p>;
  }

  return (
    <ul className="space-y-2">
      {products.map((product, index) => (
        <li key={index} className="border p-4 rounded shadow">
          <span className="font-semibold">{product.name}</span> - ₹{product.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;

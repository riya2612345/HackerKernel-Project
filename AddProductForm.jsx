import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (!name.trim() || !price.trim()) {
      alert('Both fields are required');
      return;
    }

    onAddProduct({ name: name.trim(), price: parseFloat(price) });
    setName('');
    setPrice('');
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="p-2 border rounded mr-2"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        className="p-2 border rounded mr-2"
      />
      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add
      </button>
    </div>
  );
};

export default AddProductForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProductForm from './AddProductForm';
import SearchBar from './SearchBar';
import ProductList from './ProductList';

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('token');  
    navigate('/');  
  };

  const handleAddProduct = (newProduct) => {
    const isDuplicate = products.some(p => p.name.toLowerCase() === newProduct.name.toLowerCase());
    if (isDuplicate) {
      alert('Product already exists!');
      return;
    }
    setProducts([...products, newProduct]);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-500">Product Dashboard</h1>
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-800"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <AddProductForm onAddProduct={handleAddProduct} />
      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;

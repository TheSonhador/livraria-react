import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductModal from './ProductModal';

const products = [
  { id: 1, name: 'Product 1', description: 'This is the first product.', price: 29.99 },
  { id: 2, name: 'Product 2', description: 'This is the second product.', price: 39.99 },
  { id: 3, name: 'Product 3', description: 'This is the third product.', price: 49.99 },
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h1 className='title'>Lista de Produtos</h1>
      <ProductList products={products} openModal={openModal} />
      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
}

export default App;

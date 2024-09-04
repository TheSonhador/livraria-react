import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductModal from './ProductModal';
import img1 from './img/nadapodemeferir.jpg';

const products = [
  { 
    id: 1, 
    name: 'Nada pode me ferir', 
    price: 47.42, 
    description: "Nada Pode Me Ferir é uma obra que oferece uma visão íntima e poderosa sobre as experiências de viver com deficiência e a jornada para encontrar força interior e continuar vivendo com dignidade e propósito.", 
    img: img1 
  },
  { id: 2, name: 'Product 2',price: 39.99, description: 'This is the second product.'},
  { id: 3, name: 'Product 3',price: 49.99, description: 'This is the third product.'},
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

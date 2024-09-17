import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductModal from './ProductModal';
import img1 from './img/nadapodemeferir.jpg';
import img2 from './img/artedaguerra.jpg';
import img3 from './img/habitosatomicos.jpg';

const products = [
  { 
    id: 1, 
    name: 'Nada pode me ferir', 
    price: 47.42, 
    description: "Nada Pode Me Ferir é uma obra que oferece uma visão íntima e poderosa sobre as experiências de viver com deficiência e a jornada para encontrar força interior e continuar vivendo com dignidade e propósito.", 
    img: img1 
  },
  { 
    id: 2,
    name: 'A Arte da Guerra',
    price: 27.43, 
    description: 'A Arte da Guerra é uma obra-prima da ciência militar cujos conceitos e ensinamentos influenciaram guerreiros da Antiguidade e continuam úteis para todos os tipos de líderes e estrategistas modernos. Um eterno best-seller entre apreciadores de estratégia política, de negócios e na vida cotidiana.',
    img: img2
  },
  { id: 3, 
    name: 'Hábitos Atômicos',
    price: 43.32, 
    description: 'Hábitos Atômicos oferece um método eficaz para você se aprimorar ― todos os dias. James Clear, um dos mais expoentes especialistas na criação de hábitos, revela as estratégicas práticas que o ensinarão, exatamente, como criar bons hábitos, abandonar os maus e fazer pequenas mudanças de comportamento que levam a resultados impressionantes.',
    img: img3
  },
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
      <h1 className='title'>Livraria Bom Preço</h1>
      <ProductList products={products} openModal={openModal} />
      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
}

export default App;

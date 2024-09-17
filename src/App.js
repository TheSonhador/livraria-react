import React, { useState } from 'react'; 
import ProductList from './ProductList';  // Importa o componente ProductList que renderiza a lista de produtos
import ProductModal from './ProductModal';  // Importa o componente ProductModal que exibe os detalhes do produto em um modal
import img1 from './img/nadapodemeferir.jpg';  
import img2 from './img/artedaguerra.jpg';
import img3 from './img/habitosatomicos.jpg';
import img4 from './img/arume_a_sua_cama.jpg';
import img5 from './img/um_dia_sem_reclamar.jpg';
import img6 from './img/sem_limites.jpg';

// Array de produtos, contendo ID, nome, preço, descrição e imagem de cada produto
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
  { 
    id: 3, 
    name: 'Hábitos Atômicos',
    price: 43.32, 
    description: 'Hábitos Atômicos oferece um método eficaz para você se aprimorar ― todos os dias. James Clear, um dos mais expoentes especialistas na criação de hábitos, revela as estratégicas práticas que o ensinarão, exatamente, como criar bons hábitos, abandonar os maus e fazer pequenas mudanças de comportamento que levam a resultados impressionantes.',
    img: img3
  },
  { 
    id: 4, 
    name: 'Arrume a sua cama',
    price: 44.99, 
    description: '“Arrume a sua cama”, do almirante William McRaven, transformou sua famosa palestra sobre liderança, que viralizou com mais de 10 milhões de visualizações, em um best-seller. Seu livro, baseado em 10 lições do treinamento das forças especiais, alcançou grande sucesso e ficou meses na lista dos mais vendidos do The New York Times.',
    img: img4
  },
  { 
    id: 5, 
    name: '#UmDiaSemReclamar',
    price: 37.99, 
    description: 'O livro desafia os leitores a passar um dia inteiro sem reclamar, reiniciando a contagem do tempo a cada violação. Este exercício visa aumentar a consciência sobre a ingratidão natural e inclui seis outros exercícios para transformar a forma como enfrentamos nossos problemas.',
    img: img5
  },
  { 
    id: 6,
    name: 'Sem Limites',
    price: 37.99, 
    description: '“Este livro inovador revela práticas baseadas na ciência e técnicas comprovadas usadas pelos melhores profissionais do planeta para atingir resultados em nível mundial.',
    img: img6
  },
    
  ];

function App() {
  // Estado que guarda o produto selecionado; começa com null (nenhum produto selecionado)
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Função que abre o modal atribuindo o produto clicado ao estado 'selectedProduct'
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  // Função que fecha o modal definindo 'selectedProduct' como null
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h1 className='title'>Livraria Bom Preço</h1> 

      {/* Componente ProductList, que recebe a lista de produtos e a função openModal para ser chamada ao clicar em um produto */}
      <ProductList products={products} openModal={openModal} />

      {/* Se um produto estiver selecionado (selectedProduct não for null), o modal com os detalhes do produto é exibido */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
}

export default App; 

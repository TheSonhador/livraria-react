import React, { useLayoutEffect, useRef } from 'react';

// Função que define o componente ProductModal
function ProductModal({ product, onClose }) {
  // useRef é usado para criar uma referência ao elemento DOM da modal
  const modalRef = useRef();

  // useLayoutEffect é um hook que executa o efeito após a renderização, mas antes da pintura na tela
  // Isso garante que as alterações no layout aconteçam sem "flickering" (piscar) na interface
  useLayoutEffect(() => {
    // Verifica se a referência modalRef está definida
    if (modalRef.current) {
      // Pega as dimensões do modal
      const { offsetWidth, offsetHeight } = modalRef.current;
      
      // Centraliza o modal calculando a posição com base na altura e largura
      modalRef.current.style.top = `calc(50% - ${offsetHeight / 2}px)`;
      modalRef.current.style.left = `calc(50% - ${offsetWidth / 2}px)`;
    }
  }, []); // Array vazio significa que o efeito roda apenas após o primeiro render (montagem do componente)

  return (
    // Overlay do modal que chama onClose ao clicar fora do conteúdo do modal
    <div className="modal-overlay" onClick={onClose}>
      
      {/* O modal em si, com a referência modalRef para acessá-lo diretamente */}
      <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>

        <h2>{product.name}</h2>
        <img src={product.img} alt={product.name}/>
        <hr />
        <p><strong>Sinopse:</strong> {product.description}</p>      
        <p><strong>Preço:</strong> ${product.price}</p>
        
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default ProductModal;

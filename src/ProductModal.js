import React, { useLayoutEffect, useRef } from 'react';

function ProductModal({ product, onClose }) {
  const modalRef = useRef();

  useLayoutEffect(() => {
    if (modalRef.current) {
      const { offsetWidth, offsetHeight } = modalRef.current;
      modalRef.current.style.top = `calc(50% - ${offsetHeight / 2}px)`;
      modalRef.current.style.left = `calc(50% - ${offsetWidth / 2}px)`;
    }
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
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

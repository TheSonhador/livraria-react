import React from 'react';

function ProductList({ products, openModal }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <button onClick={() => openModal(product)}>Ver detalhes</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

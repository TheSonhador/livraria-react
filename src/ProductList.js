import React from 'react';

function ProductList({ products, openModal }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h2>{product.name}</h2>
          <img src={product.img} alt={product.name} />
          <button onClick={() => openModal(product)}>Ver detalhes</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

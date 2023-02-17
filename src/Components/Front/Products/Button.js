import React from 'react'

function Button() {
  function handleAddProduct(handleAddProduct) {
    handleAddProduct.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <form onSubmit={handleAddProduct}>
        <button className="product-add-button" type="button" > to Cart </button>
      </form>
    );
  
}

export default Button


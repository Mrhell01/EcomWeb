import React from "react";
import "./Products.css";
// import ProductFilter from "./ProductFilter";

const Products = ({ productItems, handleAddProduct }) => {
  return (
        
    <div className="products">
      {productItems.map((productItems) => (
        <div className="card">
              <img
                className="product-image"
                src={productItems.image}
                alt={productItems.name}
                  />
              <div>
                  <h3 className="product-name">
                      {productItems.name}
                  </h3>
              </div>

              <div className="product-price">
                  ₹{productItems.price}
              </div>
          
              <div>
            <button
              className="product-add-button"
              onClick= {()=> handleAddProduct (productItems)}>
              Add to Cart
             </button>
             </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

import React,{useState} from "react";
import ProductFilter from "./ProductFilter";
import "./Products.css";

const Products = ({ productItems, handleAddProduct }) => {
  const [filter, setfilter] = useState('All');
  const filterChangehandler = (selected) => {
      setfilter(selected);
  }

  const filteredItems = productItems.filter((item) => {
    if(filter === 'All'){
      return item;
    }
    else{

      return item.type === filter;
    }
   
});
productItems =filteredItems;

  return (
    <div className="products">
      <div className="filter">
        <ProductFilter selected={filter} onChangeFilter ={filterChangehandler}/>
      </div>
      {productItems.map((productItem) => (
        <div className="card" key={productItem.id}>
              <img
                className="product-image"
                src={productItem.image}
                alt={productItem.name}
                  />
              <div>
                  <h3 className="product-name">
                      {productItem.name}
                  </h3>
              </div>

              <div className="product-price">
                  ₹{productItem.price}
              </div>
          
              <div>
            <button
              className="product-add-button"
              onClick= {()=> handleAddProduct (productItem)}>
              Add to Cart
             </button>
             </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

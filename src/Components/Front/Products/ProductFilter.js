import React from 'react'
import './ProductFilter.css'


const ProductFilter = (props) => {
    const dropdownChangeHandler = (event) => {
              props.onChangeFilter(event.target.value);
    };
    
  return (
    <div className='Product-filter'>
      <div className='Product-filter__control'>
        <label> </label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='Shoes'>Shoes</option>
          <option value='Ear Buds'>Ear Buds</option>
          <option value='Iphone'>Iphone</option>
        </select>
      </div>
    </div>
  )
}

    export default ProductFilter;

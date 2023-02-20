import React from 'react'
import './ProductFilter.css'


const ProductFilter = (props) => {
  const filterhandler =(event) =>{
    props.onChangeFilter(event.target.value);
  }
  return (
    <div className='Product-filter'>
      <div className='Product-filter__control'>
        <select value={props.selected} onChange={filterhandler}>
          <option value='All'>All</option>
          <option value='Shoes'>Shoes</option>
          <option value='Ear Buds'>Ear Buds</option>
          <option value='Iphone'>Iphone</option>
        </select>
      </div>
    </div>
  )
}

    export default ProductFilter;

import React from 'react';
import Products from '../Products/Products';
// import Cart from '../Cart/Cart';
import { Route , Switch } from "react-router-dom";
// import ProductFilter from '../Products/ProductFilter';

const Routes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance
}) => {
  return (
    <div>    
      <Switch>
        <Route exact path='/' />
        <Products productItems={productItems} />
      </Switch>
    </div>
  )
}

export default Routes;

// {/* <Switch>
//               <Route exact path='/' >
//           <Products
//             productItems={productItems}
//             handleAddProduct={handleAddProduct}
//           />
//         </Route>
        
//         <Route exact path="/Cart" component={Cart}  >
//           <Cart cartItems={cartItems}
//             handleAddProduct={handleAddProduct}
//             handleRemoveProduct={handleRemoveProduct}
//             handleCartClearance={handleCartClearance}
//           />
//         </Route>
//       </Switch> */}
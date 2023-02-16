import React from 'react';
//import DashBoard from './Components/Front/DashBoard';
import data from './Components/Back/Data/Data';
import Header from './Components/Front/Header/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Components/Front/Router/Routes'
  const App = () => {
    
    const { productItems } = data;

  return (
    <div >
      <Router>
        <Header></Header>
        <Routes productItems ={productItems}> </Routes>
      </Router>
      
    </div>
  );

};

export default App;

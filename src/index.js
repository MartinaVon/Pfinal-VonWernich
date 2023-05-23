import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import { ItemListContainer } from './componentes/ItemListContainer';
import { NavBar } from './componentes/NavBar';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import { CartProvider } from './context/CartProvider';
import { Cart } from './componentes/Cart/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:productId' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import { ItemListContainer } from './componentes/ItemListContainer';
import { NavBar } from './componentes/navBar';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import { CartProvider } from './context/CartProvider';
import { Cart } from './componentes/Cart/Cart';
import { initializeApp } from "firebase/app";
import { CheckOut } from './componentes/CheckOut/CheckOut';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH1urcd739rWKsV9LhjO7rMnI1Qg-T5K0",
  authDomain: "martina-react-app.firebaseapp.com",
  projectId: "martina-react-app",
  storageBucket: "martina-react-app.appspot.com",
  messagingSenderId: "227935791892",
  appId: "1:227935791892:web:54b8446a7545eaecc9f001"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



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
          <Route path='/checkOut' element={<CheckOut/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';

import { MdClose } from 'react-icons/md'

export const Cart = () => {

  const { cart, deleteItem, productQuantity, setProductQuantity } = useContext(CartContext)

   const allCartProducts = () => {
     return (
       cart.map(item => (
         <div className='cart-each-product' key={item.id}>
          <img src={item.image} alt="" />
           <h6 className='cart-each-product-name'>{item.name}</h6>
           <h6 className='cart-each-product-price'>{item.price}</h6>
           <h6 className='cart-each-product-quantity'>{productQuantity}</h6>
           { <MdClose className='cart-icon' onClick={()=> deleteItem(item.id)}/> }
         </div>
       ))
     )
   }
   const allCartProductsTitles = () => {
    return (
      <div className='cart-each-product-categories cart-each-product'>
          <img src="" alt="" />
          <h6 className='cart-each-product-name'>Producto</h6>
          <h6 className='cart-each-product-price'>Precio</h6>
          <h6 className='cart-each-product-quantity'>Cantidad</h6>
          <h1></h1>
      </div>
    )
   }

  return (
    <div className="cart-section">
      <h2>Carrito de compras</h2>
      <div className='cart-product-container'>
        { cart.length >= 1
          ?
          <>
          {allCartProductsTitles()}
          {allCartProducts()}
          </>
          :
          <h6 className='empty-cart-message'>El carrito está vacio</h6>
        }
       
      </div>
    </div>
  )
}


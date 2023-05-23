import { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import { Button } from "../Button"
import { MdClose } from 'react-icons/md'

export const Cart = () => {

  const { cart, deleteItem } = useContext(CartContext)

  console.log(cart)

   const allCartProducts = () => {
     return (
       cart.map(item => (
         <div className='cart-each-product' key={item.id}>
          <img src={item.image} alt="" />
          <div className='cart-each-product-name-price'>
            <h6 className='cart-each-product-name'>{item.name}</h6>
            <h6 className='cart-each-product-price'>{item.price}</h6>
          </div>
           <h6 className='cart-each-product-quantity'>{item.quantity}</h6>
           <h6 className='cart-each-product-subtotal'>${parseFloat(item.price.replace(/\$/g, ""))*parseFloat(item.quantity)}</h6>
           { <MdClose className='cart-icon' onClick={()=> deleteItem(item.id)}/> }
         </div>
       ))
     )
   }

   const allCartProductsTitles = () => {
    return (
      <div className='cart-each-product-categories cart-each-product'>
          <h6 className='cart-each-product-name'>Producto</h6>
          <h6 className='cart-each-product-quantity'>Cantidad</h6>
          <h6 className='cart-each-product-quantity'>Subtotal</h6>
          <h1></h1>
      </div>
    )
   }

   const cartResume = () => {
    return (
      <div className='cart-resume'>
        <h4>Resumen</h4>
        <h3>Total $ {cart.reduce((accumulator, item) => {
          const itemTotal = parseFloat(item.price.replace(/\$/g, ""))*parseFloat(item.quantity);
          return accumulator + itemTotal;
          }, 0)}</h3>
        <Button
          text={"Pagar"}
          clase={"button-cart-check-out"}
          funcionalidad={"veo"}
        />
      </div>
    )
   }

  return (
    <div className="cart-section">
      <h2>Carrito de compras</h2>
      { 
      cart.length >= 1 
      ?
      <div className='cart-product-container'>
          <>
          {allCartProductsTitles()}
          {allCartProducts()}
          </>
      </div>
      : 
      null
      }
      { cart.length >= 1 ? cartResume() : 
      <h6 className='empty-cart-message'>El carrito está vacio</h6>}
    </div>
  )
}

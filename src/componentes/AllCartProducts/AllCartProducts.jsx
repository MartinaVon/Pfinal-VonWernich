import { MdClose } from 'react-icons/md'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'


export const AllCartProducts = ({ cart, showDeleteButton }) => {

    const {deleteItem} = useContext(CartContext)
    const allCartProducts = () => {
        return (
          cart.map(item => (
            <div className='cart-each-product' key={item.id}>
             <img src={item.image} alt="" />
             <div className='cart-each-product-name-price'>
               <h6 className='cart-each-product-name'>{item.name}</h6>
               <h6 className='cart-each-product-price'>${item.price}</h6>
             </div>
              <h6 className='cart-each-product-quantity'>{item.quantity}</h6>
              <h6 className='cart-each-product-subtotal'>${item.price*parseFloat(item.quantity)}</h6>
              { showDeleteButton &&
              <MdClose className='cart-icon' onClick={()=>deleteItem(item.id)}/> }
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
      
  return (
    <div className='cart-product-container'>
        {allCartProductsTitles()}
        {allCartProducts()}
    </div>
  )
}



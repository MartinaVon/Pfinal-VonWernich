import { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import { MdClose } from 'react-icons/md'
import { Form } from '../Form/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AllCartProducts } from '../AllCartProducts/AllCartProducts';
import { CartResume } from '../CartResume/CartResume';


export const Cart = () => {

  const { cart, deleteItem } = useContext(CartContext)


  const navigate = useNavigate()

   const onCheckOut = () => {
    navigate("/checkOut")
   }

  return (
    <div className="cart-section">
      <h2>Carrito de compras</h2>
      { 
      cart.length >= 1 
      ? 
      <>
         <AllCartProducts
          cart={cart}
          deleteItem={deleteItem}
          showDeleteButton={true}
        />
          <CartResume
          cart={cart}
          onCheckOut={onCheckOut}
          showCheckOutButton={true}
          />
      </>
      : 
      <>
          <h6 className='empty-cart-message'>El carrito está vacio</h6>
          <Link to={"/"} className='go-to-buy'>Ir a comprar</Link>
      </>
      }
    </div>
  )
}

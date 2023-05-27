import { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { AllCartProducts } from '../AllCartProducts/AllCartProducts';
import { CartResume } from '../CartResume/CartResume';
import { MdDelete } from 'react-icons/md'
import { Button } from '../Button';


export const Cart = () => {

  const { cart, deleteItem, clearOutCart } = useContext(CartContext)


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
          <div className='cart-buttons-container'>
            <Button 
              icon={<MdDelete/>}
              text={"Vaciar carrito"}
              clase={"clear-out-cart-button"}
              funcionalidad={clearOutCart}
            /> 
            <Link to={"/"} className='continue-buying-button' >Seguir comprando</Link>
          </div>
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

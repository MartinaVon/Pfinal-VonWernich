
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartWidget = () => {

    
    const { cart } = useContext(CartContext)

    return (
        <div className="cart-container">
             <FaShoppingCart className='cart-icon'/>
            <span className='cart-items'>{cart.length}</span>
        </div>
    )
    
}

import { FaShoppingCart } from 'react-icons/fa'

export const CartWidget = ({cartItems}) => {
    return (
        <div className="cart-container">
             <FaShoppingCart className='cart-icon'/>
            <span className='cart-items'>{cartItems}</span>
        </div>
    )
    
}
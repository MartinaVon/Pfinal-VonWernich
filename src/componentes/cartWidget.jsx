
import { FaShoppingCart } from 'react-icons/fa'

export const CartWidget = () => {
    return (
        <div className="cart-container">
             <FaShoppingCart className='cart-icon'/>
            <span className='cart-items'>1</span>
        </div>
    )
    
}
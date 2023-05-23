import { useState } from "react"
import { CartContext } from "./CartContext"


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const [productQuantity, setProductQuantity] = useState(1)

    const addToCart = (img, item, qty, pric, ide) => {
        setCart([...cart, {
            image: img,
            name: item, 
            quantity: qty, 
            price: pric,
            id: ide
        }])
    }

    const deleteItem = (productId) => {
        const newList = cart.filter(item => item.id !== productId)
        console.log(newList)
        setCart(newList)
    }
    

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteItem, productQuantity, setProductQuantity }}>
        {children}
    </CartContext.Provider>
  )
}



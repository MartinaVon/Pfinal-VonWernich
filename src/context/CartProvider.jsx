import { useState } from "react"
import { CartContext } from "./CartContext"


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (img, item, pric, ide, qty) => {

        const existingItem = cart.find(item => item.id == ide)
        if (existingItem) {
            let updatedCart = cart.map(item => {
                if (item.id == ide) { 
                return {
                    ...item, 
                    quantity: item.quantity + qty
                }
            }
            return item 
        })
        setCart(updatedCart)
        } else 

        setCart([...cart, {
            image: img,
            name: item, 
            price: pric,
            id: ide,
            quantity: qty, 
        }])
    }

    /////////////-----ELIMINAR PRODUCTO---------//////////////////////////

    const deleteItem = (productId) => {
        const newList = cart.filter(item => item.id !== productId)
        console.log(newList)
        setCart(newList)
    }
    

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteItem }}>
        {children}
    </CartContext.Provider>
  )
}



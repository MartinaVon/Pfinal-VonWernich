import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'


export const ItemCount = ({initial, stock}) => {

    const { productQuantity, setProductQuantity } = useContext(CartContext)


    const incrementCount = ()=> {
        if (productQuantity < stock) {
            setProductQuantity(productQuantity + 1)
        }
    }
    const decreaseCount = ()=> {
        if (productQuantity > initial) {
            setProductQuantity(productQuantity - 1)
        }
    }

  return (
    <div className='counter-product-quantity'>
        <button className='change-quantity'
        onClick={decreaseCount}>
            -
        </button>
        <div className='product-quantity-number'>
            {productQuantity}
        </div>
        <button className='change-quantity'
        onClick={incrementCount}>
            +
        </button>
    </div>
  )
}



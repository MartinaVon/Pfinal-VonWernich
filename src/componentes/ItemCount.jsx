import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'


export const ItemCount = ({initial, stock, onCountChange}) => {

    const [count, setCount] = useState(1);



    const incrementCount = ()=> {
        if (count < stock) {
            setCount(count + 1)
            onCountChange(count + 1)
        }
    }
    const decreaseCount = ()=> {
        if (count > initial) {
            setCount(count - 1)
            onCountChange(count - 1)
        }
    }

  return (
    <div className='counter-product-quantity'>
        <button className='change-quantity'
        onClick={decreaseCount}>
            -
        </button>
        <div className='product-quantity-number'>
            {count}
        </div>
        <button className='change-quantity'
        onClick={incrementCount}>
            +
        </button>
    </div>
  )
}



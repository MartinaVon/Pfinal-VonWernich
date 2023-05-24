import { useContext } from "react"
import { Button } from "./Button"
import { ItemCount } from "./ItemCount"
import { CartContext } from "../context/CartContext"


export const ItemDetail = ({goToCart,productName, productPrice, productImg, productDescription, funcion1, onQuantityChange}) => {

  const { cart } = useContext(CartContext)  
  const handleItemCountChange = (quantity) => {
    onQuantityChange(quantity);
  }
  
  return ( 
    <div className="product-detail-container">
        <div className="detail-container-img">
            <img src={productImg} alt="" />
        </div>
        <div className="detail-container-info"> 
            <h2 className="product-name">{productName}</h2>
            <h3 className="product-price">{productPrice}</h3>
            <p className="product-description">{productDescription}</p>
            <div className="carrito-button-container">
                <ItemCount
                  initial={1} 
                  stock={5}
                  onCountChange={handleItemCountChange}
                ></ItemCount>
                <Button
                  clase={"button"}
                  text={"AÑADIR AL CARRITO"}
                  funcionalidad={funcion1}
                ></Button> 
            </div>
            {
              cart.length >= 1
              &&
              goToCart
            }  
        </div>
      </div>
          

  )
}



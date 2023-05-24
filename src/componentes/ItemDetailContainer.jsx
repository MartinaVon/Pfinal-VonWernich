import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { Button } from "./Button"
import { ItemDetail } from "./ItemDetail"
import { CartContext } from "../context/CartContext"
import { NotifCart } from "../notifications/NotifCart"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const ItemDetailContainer = () => {

  const [data, setData] = useState(false)
  let myProduct = {}

  //destructuring de params
  const {productId} = useParams()

  useEffect(()=>{
    const fetchData = async ()=> {
      const response = await fetch('/assets/data/mock_data.json');
      const jsonData = await response.json();
      setData(jsonData.filter(producto => producto.id == productId))
    }
    fetchData()
  }, [])

    if (data) {
        myProduct = data[0]
    }  

  /////////////MANEJAR LA CANTIDAD DE UN PRODUCTO CON ITEM COUNT
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };


  const { addToCart } = useContext(CartContext)  

  const handleCart = () => {
    addToCart(myProduct.image_url, myProduct.name, myProduct.price, myProduct.id, selectedQuantity)
    toast(`Haz añadido el producto ${myProduct.name} al carrito.`)
  }
//////////link para ir al carrito, si ya tiene productos//////
  const goToCart = () => {
    return (
      <Link className="go-to-cart" to={"/cart"}> Ver mi carrito de compras </Link>
    )
  }


  return (
     <div className="product-detail-main">
        <div className="button-go-back-container">
            <Button
                clase={"button-go-back"}
                text={"Ir atras"}
            ></Button>
        </div>
        <ItemDetail
              productName = {myProduct.name}
              productPrice = {myProduct.price}
              productImg = {myProduct.image_url}
              productDescription = {myProduct.description}
              myProduct={myProduct}
              funcion1={handleCart}
              onQuantityChange={handleQuantityChange}
              goToCart={goToCart()}
        ></ItemDetail> 
        <NotifCart/>
    </div>
  )
}

import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { Button } from "./Button"
import { ItemDetail } from "./ItemDetail"
import { CartContext } from "../context/CartContext"


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
  
  const { cart, addToCart } = useContext(CartContext)  



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
              funcion1={() => addToCart(myProduct.image_url, myProduct.name, {quantyty}, myProduct.price, myProduct.id)}
        ></ItemDetail>  
    </div>
  )
}

// addToCart(myProduct.name, 1, myProduct.price)
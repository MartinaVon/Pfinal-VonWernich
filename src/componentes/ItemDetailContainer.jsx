import { Link, useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { Button } from "./Button"
import { ItemDetail } from "./ItemDetail"
import { CartContext } from "../context/CartContext"
import { NotifCart } from "../notifications/NotifCart"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { doc, getDoc, getFirestore } from "firebase/firestore"


export const ItemDetailContainer = () => {

  const db = getFirestore()
  const navigate = useNavigate()

  const [myProduct, setMyProduct] = useState(null)

  //destructuring de params
  const {productId} = useParams()

  useEffect(()=>{
    const itemDB = doc(db, "items", productId)
    getDoc(itemDB)
    .then((product) => {
      if (product.exists) {
        setMyProduct({id: product.id, ...product.data()})
      }
    })
  }, [])


  /////////////MANEJAR LA CANTIDAD DE UN PRODUCTO CON ITEM COUNT
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };


  const { addToCart } = useContext(CartContext)  

  const handleCart = () => {
    addToCart(myProduct.url, myProduct.name, myProduct.price, myProduct.id, selectedQuantity)
    toast(`Haz añadido el producto ${myProduct.name} al carrito.`)
  }
//////////link para ir al carrito, si ya tiene productos//////
  const goToCart = () => {
    return (
      <Link className="go-to-cart" to={"/cart"}> Ver mi carrito de compras </Link>
    )
  }
/////////////////////////funcion navigate para boton de ir atras///
  const onNavigateBack = () => {
    navigate("/")
  }

  return (
    <>
     {myProduct
    ?
     <div className="product-detail-main">
        <div className="button-go-back-container">
            <Button
                clase={"button-go-back"}
                text={"Ir atras"}
                funcionalidad={onNavigateBack}
            ></Button>
        </div>
        <ItemDetail
              productName = {myProduct.name}
              productPrice = {myProduct.price}
              productImg = {myProduct.url}
              productDescription = {myProduct.description}
              myProduct={myProduct}
              funcion1={handleCart}
              onQuantityChange={handleQuantityChange}
              goToCart={goToCart()}
        ></ItemDetail> 
        <NotifCart/>
    </div>
    :
    <h3>Loading</h3>}
    </>
  )
}

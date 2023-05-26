import { useContext } from "react"
import { AllCartProducts } from "../AllCartProducts/AllCartProducts"
import { Form } from "../Form/Form"
import "./CheckOut.css"
import { CartContext } from "../../context/CartContext"
import { CartResume } from "../CartResume/CartResume"
import { Button } from "../Button"
import { UseGoBack } from "../../hooks/UseGoBack"



export const CheckOut = () => {

    const { cart } = useContext(CartContext)
    const { onBack } = UseGoBack()


  return (
    <div className="check-out-container">
        <div className="button-go-back-container">
            <Button
                clase={"button-go-back"}
                text={"Ir atras"}
                funcionalidad={onBack}
            ></Button>
        </div>
        <div className="check-out-products-container">
            <AllCartProducts
            cart={cart}
            showDeleteButton={false}
            />
            <CartResume
            cart={cart}
            showCheckOutButton={false}
            />
        </div>
        <Form
        title={"Ingresá tus datos:"}/>
    </div>
  )
}



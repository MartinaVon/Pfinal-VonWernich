import { useContext, useState } from "react"
import { AllCartProducts } from "../AllCartProducts/AllCartProducts"
import { Form } from "../Form/Form"
import "./CheckOut.css"
import { CartContext } from "../../context/CartContext"
import { CartResume } from "../CartResume/CartResume"
import { Button } from "../Button"
import { UseGoBack } from "../../hooks/UseGoBack"
import { MdArrowBackIos } from 'react-icons/md'
import { UseForm } from "../../hooks/UseForm"
import { addDoc, collection, getFirestore, serverTimestamp, } from "firebase/firestore";
import {  useNavigate } from "react-router-dom"
import { OrderId } from "../OrderId/OrderId"


export const CheckOut = () => {


    const db = getFirestore()

    const [showCheckOut, setShowCheckOut] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [orderId, setOrderId] = useState(null)

    const navigate = useNavigate()
    const { cart } = useContext(CartContext)
    const { onBack } = UseGoBack()

    const { form, handleInputChange } = UseForm({ 
        name: "",
        lastName: "",
        phone: "",
        email:"",
        emailCheck: ""
    })

    let order = { 
        buyer: { 
            name: form.name,
            lastName: form.lastName,
            phone: form.lastName,
            email: form.email
        },
        items: cart.map(item => { 
            return {
                name: item.name,
                price: item.price,
                quantity: item.quantity
            }
        }),
        total: cart.reduce((accumulator, item) => {
            const itemTotal = item.price*parseFloat(item.quantity);
            return accumulator + itemTotal;
            }, 0),
        date: serverTimestamp()
    }

    const handleCheckOutSubmit = ()=> {
            const values = Object.values(form);
            console.log(values)

            const allFieldsFilled = values.every(value => !!value);
            console.log(allFieldsFilled)
            
            if (!allFieldsFilled) {
              setErrorMsg("Por favor, llenar todos los campos.")
            } else if (form.email !== form.emailCheck) {
                setErrorMsg("Por favor, ingresa el mismo email.")
              }
           else {
            addDoc(collection(db, "Orders"), order)
            .then(docRef => {
                setOrderId(docRef.id) 
            })
            .catch(error => {
                setErrorMsg("Error al enviar el formulario.");
            });
            setShowCheckOut(true)
            setErrorMsg("")
        }
    }
    
  return (
    <div className="check-out-container">
        {
            !showCheckOut
            ?
            <>
                <div className="button-go-back-container">
                <Button
                    clase={"button-go-back"}
                    text={"Ir atras"}
                    funcionalidad={onBack}
                    icon={<MdArrowBackIos className='icon-arrow-back'/>}
                />
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
                title={"Ingresá tus datos:"}
                handleInputChange={handleInputChange}
                handleCheckOutSubmit={handleCheckOutSubmit}
                form={form}
                errorMsg={errorMsg}
                />        
            </>
            :
            <OrderId
                idPedido={orderId}
            />
        }
        
    </div>
  )
}



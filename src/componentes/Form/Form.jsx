
import { Input } from "../../Input/Input"
import "./Form.css"
import { Button } from "../Button"
import { UseForm } from "../../hooks/UseForm"


export const Form = ({title, handleInputChange, handleCheckOutSubmit, form, errorMsg}) => {
    
    const handleSubmit = (e) => {
      e.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit} className="check-out-form">
        <h3 className="form-title">{title}</h3>
        <Input
        label={"Nombre: "}
         type= {"text"}
         onChange={handleInputChange}
         name={"name"}
         id={"nombre"}
        />
        <Input
        label={"Apellido: "}
         type= {"text"}
         onChange={handleInputChange}
         name={"lastName"}
         id={"apellido"}
        />
        <Input
        label={"Email: "}
         type= {"email"}
         onChange={handleInputChange}
         name={"email"}
         id={"email"}
        />
        <Input
        label={"Confirme email: "}
         type= {"email"}
         onChange={handleInputChange}
         name={"emailCheck"}
         id={"emailCheck"}
        />
        { form.emailCheck.length > 5 && form.email !== form.emailCheck
          ?
          <p className="email-error-msg">Ingrese el mismo mail</p>
          :
          null
        }
        <Input
        label={"Teléfono: "}
         type= {"number"}
         onChange={handleInputChange}
         name={"phone"}
         id={"telephone"}
        />
        <Button
        text={"Finalizar compra"}
        clase={"check-out-button"}
        funcionalidad={handleCheckOutSubmit}
        />
        <p className="error-msg">{errorMsg}</p>
    </form>
  )
}

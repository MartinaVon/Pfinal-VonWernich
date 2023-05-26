
import { Input } from "../../Input/Input"
import { useForm } from "../../hooks/UseForm"
import "./Form.css"
import { Button } from "../Button"
export const Form = ({title}) => {
    
    const { form, handleInputChange } = useForm()

    const handleSubmit = () => {

    }

  return (
    <form onSubmit={handleSubmit} className="check-out-form">
        <h3 className="form-title">{title}</h3>
        <Input
        label={"Nombre: "}
         type= {"text"}
         onChange={handleInputChange}
         name={"nombre"}
         id={"nombre"}
        />
        <Input
        label={"Apellido: "}
         type= {"text"}
         onChange={handleInputChange}
         name={"apellido"}
         id={"apellido"}
        />
        <Input
        label={"Email: "}
         type= {"Email"}
         onChange={handleInputChange}
         name={"email"}
         id={"email"}
        />
        <Input
        label={"Confirme email: "}
         type= {"Email"}
         onChange={handleInputChange}
         name={"emailCheck"}
         id={"emailCheck"}
        />
        <Input
        label={"Teléfono: "}
         type= {"number"}
         onChange={handleInputChange}
         name={"telephone"}
         id={"telephone"}
        />
        <Button
        text={"Finalizar compra"}
        clase={"check-out-button"}
        />
    </form>
  )
}

import { useState } from "react"

export const UseForm = (valorInicial) => {

  const [form, setForm] = useState(valorInicial)

  const handleInputChange = ({ target }) => {
    
    const {value, name} = target

    setForm({
      ...form,
      [name]: value
    })
  }

  const reset = () => {
    setForm(valorInicial)
  }

  ///////////////////comprobar campos 

  const checkFields = () => {
    const values = Object.values(form);

    console.log(values)
  
    const allFieldsFilled = values.every(value => !!value);
  
    if (!allFieldsFilled) {
      return <p className="check-input-fields">Por favor, complete todos los campos</p>;
    }
  }
  
  return {
    handleInputChange,
    reset,
    form,
    checkFields
  }

}
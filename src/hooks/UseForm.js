import { useState } from "react"

export const useForm = (valorInicial) => {

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

  return {
    handleInputChange,
    reset,
    form
  }

}
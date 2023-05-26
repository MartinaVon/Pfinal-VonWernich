
import { useNavigate } from "react-router-dom"

export const UseGoBack = () => {
    
const navigate = useNavigate()

const onBack = ()=> {
    navigate(-1)
}

  return {
    onBack
  }
}




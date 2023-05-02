import { useParams } from "react-router-dom"
import { ItemCount } from "./ItemCount"
import { useEffect, useState } from "react"


const ItemDetail = () => {

  //destructuring de params
  const {productId} = useParams()

  console.log(productId)

  const [data, setData] = useState([])
  useEffect(()=>{
    const fetchData = async ()=> {
      const response = await fetch('/assets/data/mock_data.json');
      const jsonData = await response.json();
      setData(jsonData.filter(producto => producto.id == productId))
    }
    fetchData()
  }, [])

  return (
    <div>
        <h1>detalle del producto {productId}</h1>
        <ItemCount
            initial={1} 
            stock={5}
        ></ItemCount>
    </div>
  )
}

export default ItemDetail

import { useParams } from "react-router-dom"
import { ItemCount } from "./ItemCount"
import { useEffect, useState } from "react"
import { Button } from "./Button"


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

  const onCarrito = ()=> {
    alert("hola")
  }

  return (
    <div>
       
        {
          data.map(producto => {
            return (
              <div className="product-detail-container">
                  <div className="detail-container-img">
                    <img src={producto.image_url} alt="" />
                  </div>
                <div className="detail-container-info"> 
                    <h2 className="product-name">{producto.name}</h2>
                    <h3 className="product-price">{producto.price}</h3>
                    <p className="product-description">{producto.description}</p>
                    <div className="carrito-button-container">
                      <ItemCount
                          initial={1} 
                          stock={5}
                        ></ItemCount>
                        <Button
                          text={"AÑADIR AL CARRITO"}
                          funcionalidad={onCarrito}
                        ></Button>
                    </div>  
              </div>
            </div>
            )
          })
        }
    </div>
  )
}

export default ItemDetail

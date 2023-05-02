import { useEffect, useState } from "react"
import { Item } from "./Item"
import { useNavigate, useParams } from "react-router-dom"


export const ItemListContainer = () =>{
  const [data, setData] = useState([])

  const { categoryId } = useParams()

  const navigate = useNavigate()

  const onBack = ()=> {
    navigate(-1)
  }

  useEffect(()=>{
    const fetchData = async ()=> {
      const response = await fetch('/assets/data/mock_data.json');
      const jsonData = await response.json();
      if (categoryId) {
        setData(jsonData.filter(producto => producto.category == categoryId))
      } else {
        setData(jsonData);
      }
    }
    fetchData()
  }, [categoryId])

  return (
      <div className="item-list">

          <div className="container-button-go-back">
              {categoryId && (<h6 onClick={onBack}>Ir atras</h6>)}    
          </div>
       
          {data.map(producto => (
              <Item
                key= {producto.id}
                productLink={`/productos/${producto.id}`}
                productName={producto.name}
                price={producto.price}
                description={producto.description}
                imgUrl={producto.imgUrl}
              />
            ))}

      </div>
  )
}
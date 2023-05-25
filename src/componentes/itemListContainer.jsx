import { useGoBack } from "../hooks/UseGoBack"
import { ItemList } from "./ItemList"
import { Button } from "./Button"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Item } from "./Item"
import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore"

export const ItemListContainer = () =>{

  const { onBack } = useGoBack()
  const { categoryId } = useParams()

  const [data, setData] = useState([])

  //conexion a la base de datos
  const db = getFirestore()

  console.log(categoryId)

useEffect(() => {
  if (categoryId) {
    const q = query(collection(db, "items"), where("category", "==", categoryId))
    getDocs(q)
    .then( products => {
      setData(products.docs.map(doc => ({id: doc.id, ...doc.data()})))
     })

  }else {
    const productsDB = collection(db, "items")
    getDocs(productsDB)
    .then( products => {
     setData(products.docs.map(doc => ({id: doc.id, ...doc.data()})))
    })
  }
}, [categoryId, db])

// useEffect(()=>{
//   const fetchData = async ()=> {
//     const response = await fetch('/assets/data/mock_data.json');
//     const jsonData = await response.json();
//     if (categoryId) {
//       setData(jsonData.filter(producto => producto.category == categoryId))
//     } else {
//       setData(jsonData);
//     }
//   }
//   fetchData()
// }, [categoryId])

  const renderItem = ()=> {
    return (
      data.map(producto => (
        <Item
        key= {producto.id}
        productLink={`/productos/${producto.id}`}
        productName={producto.name}
        price={`$${producto.price}`}
        description={producto.description}
        imgUrl={producto.url}
        />
    ))
  )
}

  return (
      <div className="item-list">
        <div className="container-button-go-back">
          {categoryId && (
              <Button
              clase={"button-go-back"}
              text={"Ir atras"}
              funcionalidad={onBack}
              ></Button>
          )}
        </div>
        <ItemList
        renderItem={renderItem()}/>
      </div>
  )
}
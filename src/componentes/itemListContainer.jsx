import { ItemList } from "./ItemList"
import { Button } from "./Button"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Item } from "./Item"
import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore"
import { MainBanner } from "./MainBanner/MainBanner"
import { MdArrowBackIos } from 'react-icons/md'


export const ItemListContainer = () =>{

  const navigate = useNavigate()
  const { categoryId } = useParams()

  const [data, setData] = useState(null)

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

  const onNavigateBack = () => {
    navigate("/")
  }
  
  return (
<main>
    {
        data
        ?
        <>
          <MainBanner/>
          <div className="item-list">
                <div className="container-button-go-back">
                  {categoryId && (
                      <Button
                      clase={"button-go-back"}
                      text={"Ir atras"}
                      funcionalidad={onNavigateBack}
                      icon={<MdArrowBackIos className='icon-arrow-back'/>}
                      ></Button>
                  )}
              </div>
              <ItemList
              renderItem={renderItem()}/>
          </div>
      </>
      :
      <h3 className="main-loading">Loading </h3>
    }

</main>
     
  )
}


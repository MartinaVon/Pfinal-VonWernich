import { Button } from "../Button";

export const CartResume = ({cart, onCheckOut, showCheckOutButton}) => {

    const cartResume = () => {
        return (
          <div className='cart-resume'>
            <h4>Resumen</h4>
            <h3>Total $ {cart.reduce((accumulator, item) => {
              const itemTotal = item.price*parseFloat(item.quantity);
              return accumulator + itemTotal;
              }, 0)}</h3>
              {
                showCheckOutButton &&
                <Button
                text={"Finalizar compra"}
                clase={"button-cart-check-out"}
                funcionalidad={onCheckOut}
                />
              }
          </div>
        )
       }
  return (
    <>
     {cartResume()}
    </>
  )
}



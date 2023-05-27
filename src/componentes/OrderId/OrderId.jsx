import "./OrderId.css"

export const OrderId = ({idPedido}) => {
    
  return (
    <div className="Order-id-container">
      <div className="Order-id">
          <h2>¡Felicitaciones!</h2>
          <h2>Tu pedido se ha realizado con éxito.</h2>
          <h3>Id de tu pedido: {idPedido}</h3>
      </div>
    </div>
  )
}
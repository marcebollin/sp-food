import React from 'react';
import '../styles/OrderSummary.css'

const WHATSAPP_PHONE = '+584144218471' 

const OrderSummary = ({ order }) => {
  const handleClick = () => {
    const separator = "---------"
    let message = `Pedido: \n${separator}\n`
    let totalPrice = 0.00;
    for(const product of order) {
      message += `-${product.name} ${product.quantity} unds. ${product.price}$ \n`
      totalPrice += product.price 
    }

    message += `${separator}\nTotal: ${totalPrice}$`
    const encodedMessage = encodeURIComponent(message)
    const startedLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=`
    const url = `${startedLink}${encodedMessage}`

    window.open(url, '_blank')
  }

  return (
    <section className='order-summary'>
      <h2>Resumen</h2>
      <ul >
        {order.map((product, index) => 
          <li key={index}>
            <p className='order-summary--name'>- {product.name}</p>
            <p className='order-summary--quantity'>{product.quantity} unds.</p>
            <p className='order-summary--price'>{product.price}$</p>
          </li>
        )}
      </ul>
      <button className='send-order' onClick={handleClick}>Enviar Pedido</button>
    </section>
  );
}
 
export default OrderSummary;
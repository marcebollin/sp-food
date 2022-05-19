import React from 'react';
import '../styles/OrderBox.css'

const OrderBox = ({ orderLength, setOpenModal, openModal}) => {
  const handleClick = () => {
    if(orderLength > 0) setOpenModal(prev => !prev)
  }

  return (
    <div className={`order-box ${(openModal) ? "close-icon" : 'box-icon'}`} onClick={handleClick}>
      {(!openModal) 
        ? <span>{orderLength}</span>
        : ""}
    </div>
  );
}
 
export default OrderBox;
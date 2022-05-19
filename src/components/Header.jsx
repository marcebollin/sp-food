import React from 'react';
import OrderBox from './OrderBox';
import '../styles/Header.css'
import pizzaLogo from '../assets/icons/pizza-logo.png'

const Header = ({ order, setOpenModal, openModal }) => {
  const orderLength = order.reduce((acc, value) => acc += value.quantity, 0)
  return (
    <header className='principal-header'>
      <img className='logo' src={pizzaLogo} alt="SPizza's logo" />
      <OrderBox orderLength={orderLength} setOpenModal={setOpenModal} openModal={openModal}/>
    </header>    
  );
}
 
export default Header;
import React from 'react';
import '../styles/Footer.css'
import pizzaLogo from '../assets/icons/pizza-logo.png'

const Footer = () => {
  return (
    <footer className='principal-footer'>
      <img src={pizzaLogo} alt="logo" style={{width: "100px"}}/>
      {/* <ul className='socials'>
        <li className='instagram'>Instagram</li>
        <li className='github'>GitHub</li>
        <li className="email">marceloleon050@gmail.com</li>
      </ul> */}
    </footer>
  );
}
 
export default Footer;
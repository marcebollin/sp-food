import React from 'react';
import FoodCard from './FoodCard';
import '../styles/CardSection.css'

const CardSection = ({ title, products, setOrder }) => {
  return ( 
    <section className='card-section'>
      <header className='card-section--header'>
        <h2>{title}</h2>
        <h3>{products.length} resultados.</h3>
      </header>
      <ul>
      {products.map((product, id) => (
        <li key={id}>
          <FoodCard info={product} setOrder={setOrder}/>
        </li>
      ))}
      </ul>
    </section>
  );
}
 
export default CardSection;
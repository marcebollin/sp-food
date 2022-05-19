import React from 'react';
import '../styles/FoodCard.css'

const FoodCard = ({ info, setOrder }) => {
  const {
    name,
    sizes,
    description,
    image,
  } = info;

  let shortedDescription =  description.substring(0, 900 / name.length)
  shortedDescription += (description.length > shortedDescription.length) ? "..." : ""
  const price = 15.00
  
  const middleSizeIndex = Math.round(sizes.length / 2) - 1;
  const middleSize = sizes[middleSizeIndex]
  
  const handleClick = (target, product) => {
    setOrder(prev => {
      const temp = [...prev]
      const productIndex = temp.findIndex(({ name }) => name === product.name)
      
      if(productIndex !== -1) {
        const newQuantity = temp[productIndex].quantity + 1
        const newPrice = temp[productIndex].price + middleSize.price
        const parsedProduct = {
          ...temp[productIndex],
          quantity: newQuantity,
          price: newPrice
        }
        temp[productIndex] = parsedProduct
      } else {
        let parsedProduct = {
          ...product,
          size: middleSize.name,
          quantity: 1,
          price: middleSize.price
        }
        temp.push(parsedProduct)
      } 
      return temp
    })
  }

  return (
    <div className='card'>
      <header>
        <img src={image} alt={`${name}`} loading='lazy' />
      </header>
      <section>
        <h2>{name}</h2>
        <h3>{middleSize.name} <span className='card--element-size'>{middleSize.value} cm.</span></h3>
        <p className='card--description'>{shortedDescription}</p>
      </section>
      <footer>
        <span className='card--price'>${price}</span>
        <i 
          className='card--add-icon'
          onClick={({target}) => handleClick(target, info)}  
        ></i>
      </footer>
    </div>
  );
}
 
export default FoodCard;
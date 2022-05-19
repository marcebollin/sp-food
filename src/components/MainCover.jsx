import React, { useState, useEffect } from 'react';
import SearchSection from './SearchSection';
import '../styles/MainCover.css'
import desktopCoverImg from '../assets/images/pizza-principal-cover-small.png'
import mobileCoverImg from '../assets/images/pizza-principal-cover-medium.png'

const MainCover = ({ searchHandler, categories, setSearchableCategories, isLoading }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const coverImgURL = windowWidth >= 650 ? desktopCoverImg : mobileCoverImg;

  // To resize background image
  useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  }, []);

  return (  
    <section className='main-cover'>
      <div 
        className="main-cover--image-container" 
        style={{backgroundImage: `url('${coverImgURL}')`}}
      >
        <div className='main-cover--title'>
          <div>SPizzas</div>
          <div>más que una</div>
          <div>pizzería</div>
        </div>
      </div>
      <SearchSection 
        searchHandler={searchHandler} 
        categories={categories}
        isLoading={isLoading}
        setSearchableCategories={setSearchableCategories}  
      />
    </section>
  );
}
 
export default MainCover;
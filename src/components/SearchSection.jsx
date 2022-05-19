import React from 'react';
import '../styles/SearchSection.css'
const SearchSection = ({searchHandler, categories, setSearchableCategories, isLoading}) => {
  const handleCategoryCheck = ({target}) => {
    if(target.checked) {
      setSearchableCategories(prev => prev.concat([target.value]))
    } else {
      setSearchableCategories(prev => prev.filter(category => category !== target.value)) 
    }
  }

  return (
    <div className='search-section'>
      <button className="help-button">Ayúdame a Ordenar</button>
      <div className='search-wrapper'>
        <label 
          htmlFor="search-bar" 
          className="search-icon"
        ></label>
        <input 
          type="text" 
          id="search-bar" 
          placeholder='e.g. Queso' 
          className="search-bar"
          onChange={searchHandler}
        />
      </div>
      <section className='categories-wrapper'>
        <h4>Buscar sólo en:</h4>
        {
          (isLoading) ? <span>cargando...</span>
          : <ul className='category-list'>
          {categories.map((category, index) => 
            <li 
            key={index} 
            className={(index !== categories.length-1) ? "border-right" : ""}
            >
              <input 
                type="checkbox" 
                name={category} 
                id={`${category}-checkbox`} 
                onClick={handleCategoryCheck}  
                value={category}
              />
              <label htmlFor={category}>
                {category}
              </label>
            </li>
          )}
        </ul>
        }
      </section>
    </div>
  );
}
 
export default SearchSection;
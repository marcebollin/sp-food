import { useState, useEffect, useReducer } from 'react';
import MainProducts from './MainProducts';
import MainCover from './MainCover';

const API_URL = 'https://raw.githubusercontent.com/marcebollin/sp-food-json-products/main/products.json'

const MainContent = ({ setOrder }) => {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchableCategories, setSearchableCategories] = useState([]);
  // const [error, setError] = useState(false);
  
  const searchHandler = ({ target }) => {
    const lowerCase = target.value.toLowerCase();
    setSearchValue(lowerCase);
  }

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const response = await fetch(API_URL)
      const data = await response.json()
      setProducts(data)
      setLoading(false)
    }
    
    fetchData()
  }, [])
  
  //IMPORTANTE Hacer animación de carga y not found
  const categories = Object.keys(products)
  let searchedProducts = products

  if(searchValue.length !== 0) {
    let categoriesToSearch = (searchableCategories.length === 0) ? [...categories] : searchableCategories

    categoriesToSearch.forEach(category => {
      const filteredProducts = products[category].filter(product => {
        const lowerName = product.name.toLowerCase()
        const lowerDescription = product.description.toLowerCase()
        let wasFinded = lowerName.includes(searchValue) || lowerDescription.includes(searchValue) 
        
        if(!wasFinded) {
          const sizes = product.sizes
          for(const { name, price } of sizes) { 
            wasFinded = name.toLowerCase().includes(searchValue) || price+"".toLowerCase().includes(searchValue)
            if(wasFinded) break;
          } 
        }
        
        return wasFinded;
      })

      searchedProducts = {...searchedProducts, [category]: filteredProducts}
    })
  }

  return (
    <main>
      <MainCover 
        searchHandler={searchHandler}
        isLoading={loading}
        categories={categories}
        setSearchableCategories={setSearchableCategories}
      />
      <MainProducts 
        products={searchedProducts}
        categories={categories}
        isLoading={loading}
        setOrder={setOrder}
      />
    </main>
  );
}

export default MainContent;
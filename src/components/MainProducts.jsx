import React from 'react';
import CardSection from './CardSection';

const MainProducts = ({ products, categories, isLoading, setOrder }) => {
  return ( 
    <div className="cards-wrapper">
      {isLoading && <p>Está cargando</p>}
      {!isLoading && (
        <React.Fragment>
          {categories.map((category, index) => 
            <CardSection 
              key={index} 
              title={category} 
              products={products[category]} 
              setOrder={setOrder}
            />
          )}
        </React.Fragment>
      )}
    </div>
  );
}
 
export default MainProducts;
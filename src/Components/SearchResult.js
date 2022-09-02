import React, { useState, useEffect} from 'react';
import ProductSearchCard from './ProductSearchCard';
import Commerce from '@chec/commerce.js';

const commerce = new Commerce('pk_test_464559e85f630bd82c298f86ed926b5c1000e2e799040');

function SearchResult(){
  const [products, setProducts] = useState([])

  const fetchProducts = async () =>{
    const {data} = await commerce.products.list()
      setProducts(data)
  }

  useEffect(()=>{
    fetchProducts();
  },[])

  console.log(products)
    return (
      <div className="container main-content">
        {
          products.map(product => {
         return <ProductSearchCard key={product.id} image={product.image.url} name={product.name} description={product.description} price={product.price.formatted_with_symbol} />
          })
        }
      </div>
    );
 
}

export default SearchResult;
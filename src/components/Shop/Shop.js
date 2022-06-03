import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);

   const [displayProducts, setDisplayProducts] = useState([]);
   
   useEffect( ()=>{
      console.log('Product api called');
      fetch('./products.JSON')
      .then(res => res.json())
      .then(data => {
         setProducts(data);
         setDisplayProducts(data);
      });
   }, []);

   useEffect( () =>{
      const storedCart = getStoredCart();
      const savedCart = [];
      for(const id in storedCart){
          const addedProduct = products.find(product => product.id === id);
          if(addedProduct){
            
              const quantity = storedCart[id];
              addedProduct.quantity = quantity;
              savedCart.push(addedProduct);
          }
      }
      setCart(savedCart);
  }, [products])

   const handleAddToCart = (product) => {
      const newCart = [...cart, product];
      setCart(newCart);

      //save to localStorage for Now
      addToDb(product.id);
 }

   const handleSearch = event =>{
      const searchText =  event.target.value;
      const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
      setDisplayProducts(matchedProducts);
      

   }
   return (
      <div>
         <div className="search-contariner">
            <input 
            type="text" 
            onChange={handleSearch}
            placeholder='Search Product' />
         </div>
         <div className='shop-container'>
            <div className="product-container">
               
               {
                  displayProducts.map(product => <Product 
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                  >

                  </Product>)
               }
            </div>
            <div className="cart-container">
               <Cart cart={cart} ></Cart>
            </div>
            
         </div>
      </div>
   );
};

export default Shop;
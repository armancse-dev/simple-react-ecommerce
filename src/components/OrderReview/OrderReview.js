import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';

const OrderReview = () => {
   const [products, setProducts] = useProducts();
   const [cart] = useCart(products);
   return (
      <div>
         <h1>{products.length}</h1>
         <h3>{cart.length}</h3>
         <h2>This is order reivew</h2>
      </div>
   );
};

export default OrderReview;
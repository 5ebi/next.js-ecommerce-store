'use client';

import { useState } from 'react';
import { addToCart } from './actions'; // Import server-side function

export default function AddToCartButton({ productId, productName }) {
  const [count, setCount] = useState(1); // Default count is 1

  // Increment count
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Decrement count (minimum 1)
  const decrementCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  // Handle add to cart
  const handleAddToCart = async () => {
    await addToCart(productId, count); // Call server-side function
    alert(`${count} ${productName} added to cart!`);
  };

  return (
    <div>
      {/* Quantity Selector */}
      <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>

      {/* Add to Cart Button */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

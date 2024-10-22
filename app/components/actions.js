'use server';

import { cookies } from 'next/headers';

export async function addToCart(productId, quantity) {
  const currentCookies = await cookies();
  const cartCookie = currentCookies.get('cart');

  // Initialize cart or parse the existing cart
  const cart = cartCookie ? JSON.parse(cartCookie.value) : [];

  // Check if product already exists in the cart
  const existingProductIndex = cart.findIndex((item) => item.id === productId);

  if (existingProductIndex > -1) {
    // Update the quantity of the existing product
    cart[existingProductIndex].quantity += quantity;
  } else {
    // Add new product to the cart
    cart.push({ id: productId, quantity });
  }

  // Update the cookie with the new cart state
  currentCookies.set('cart', JSON.stringify(cart), {
    maxAge: 60 * 60 * 24 * 7,
  }); // 7 days
}

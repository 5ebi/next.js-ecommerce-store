import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import productList from '../data'; // Assuming productList is available here
import styles from './page.module.scss';

export const metadata = {
  title: 'Cart',
  description: 'shopping cart with Checkout Option',
};

export default async function Cart() {
  // Get the cart cookie
  const cartCookie = await cookies().get('cart');
  const cart = cartCookie ? JSON.parse(cartCookie.value) : [];

  // Get product details based on the cart items
  const cartItems = cart
    .map((cartItem) => {
      const product = productList.find((p) => p.id === cartItem.id);
      if (product) {
        return {
          ...product,
          quantity: cartItem.quantity,
        };
      }
      return null;
    })
    .filter(Boolean); // Filter out any null values (in case the product isn't found)

  const prices = price * cartItem.quantity;

  const finalPrice = cart.reduce(sum);

  function sum(accumulator, element) {
    return accumulator + element;
  }

  return (
    <main>
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={`user-${item.id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '2rem',
              }}
            >
              <Image
                src={item.colors[0].image} // Show the first color image
                alt={item.model}
                width={100}
                height={100}
                style={{ marginRight: '1rem' }}
              />
              <div>
                <h2>
                  {item.brand} {item.model}
                </h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>Total Amnount: ${finalPrice}</div>
      <Link className={styles.Checkout} href="/cart/checkout">
        Checkout
      </Link>
    </main>
  );
}

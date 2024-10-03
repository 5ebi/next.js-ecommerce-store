import Link from 'next/link';

export const metadata = {
  title: 'Cart',
  description: 'generated by Sebi',
};

export default function Cart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </div>
  );
}

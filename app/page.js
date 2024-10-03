import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home of Espresso</h1>
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/products">Products</Link>
      <Link href="/cart">Cart</Link>
    </div>
  );
}

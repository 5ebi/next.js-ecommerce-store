import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header style={{ backgroundColor: 'var(--sblue)' }}>
      <nav>
        <ul className={styles.headerstyle}>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li>
            <Link href="/products">Products</Link>
          </li>

          <li style={{ alignSelf: 'flex-end', marginLeft: 'auto' }}>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

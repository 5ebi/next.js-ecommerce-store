import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <div className="maindiv">
        <h2>Welcome to</h2>

        <Link href="/">
          <h1 className={styles.h1}>Coffee_lab</h1>{' '}
        </Link>

        <h3 style={{ marginBottom: '10rem' }}>
          Discover the finest espresso and portafilter machines designed to
          elevate your coffee experience. Whether you’re a home barista or a
          seasoned coffee expert, our selection promises precision and quality.
          Turn your espresso dreams into reality, one perfect shot at a time.
        </h3>

        <Link href="/products">
          <div className={styles.button}>Check out our machines here</div>
        </Link>
      </div>
    </main>
  );
}

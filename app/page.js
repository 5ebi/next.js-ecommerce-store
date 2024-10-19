// import Hero from './components/Hero';
import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <div className="maindiv">
        <div>
          <h2>Welcome to </h2>
        </div>
        <div>
          <Link href="/">
            <h1 className={styles.h1}>Coffee Labs</h1>{' '}
          </Link>
        </div>
        <div>
          <h3>
            Discover the finest espresso and portafilter machines designed to
            elevate your coffee experience. Whether you’re a home barista or a
            seasoned coffee expert, our selection promises precision and
            quality. Turn your espresso dreams into reality, one perfect shot at
            a time.
          </h3>
        </div>
      </div>
    </main>
  );
}

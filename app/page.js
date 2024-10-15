import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <div className="maindiv">
        <div>
          <h2 className={styles.h2}>Welcome to </h2>
        </div>
        <div className={styles.overlaph1container}>
          <h1 className={styles.h1}>Coffee Labs</h1>
          <h1 className={styles.h1blue}>Coffee Labs</h1>
        </div>
        <div>
          <h3 className={styles.h3}>
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

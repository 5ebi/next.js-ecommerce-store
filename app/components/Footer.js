import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerstyle}>
        <div className={styles.ul}>
          <ul>
            <li> test</li>
            <li> test2</li>
            <li> test3</li>
          </ul>
        </div>
        <div className={styles.ul}>
          <ul>
            <li> shop</li>
            <li> shop2</li>
            <li> shop3</li>
          </ul>
        </div>
        <div className={styles.ul}>
          <ul>
            <li> social</li>
            <li> social2</li>
            <li> social3</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

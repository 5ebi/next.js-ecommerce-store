import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
  description: 'generated by Sebi',
};

export default function Products() {
  return (
    <main>
      <div>
        <h1>Products</h1>
      </div>
      <div className={styles.wrapperProducts}>
        <Link href="/products/profitecGo" data-test-id="profitecGO-0001">
          <div className={styles.wrapperProduct}>
            <div className={styles.wrapperProductInfo}>
              <h2>Profitec Go</h2>
              <h3>Our bestseller </h3>
              <p> The Go is an outstanding price / value model.</p>
              <p> lorem ipsum.</p>

              {/* <button className={styles.buttonLearnMore}>Add to Cart</button> */}
            </div>
            <div>
              <Image
                src="/images/profitecgo/go-black.jpg"
                width={473}
                height={440}
                alt="Picture of Profitec Go Black"
                // style={imageStyle}
              />
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.wrapperProducts}>
        <Link href="/products/profitecGo" data-test-id="profitecGO-0001">
          <div className={styles.wrapperProduct}>
            <div className={styles.wrapperProductInfo}>
              <h2>Profitec Go</h2>
              <h3>Our bestseller </h3>
              <p> The Go is an outstanding price / value model.</p>
              <p> lorem ipsum.</p>

              {/* <button className={styles.buttonLearnMore}>Add to Cart</button> */}
            </div>
            <div>
              <Image
                src="/images/profitecgo/go-black.jpg"
                width={473}
                height={440}
                alt="Picture of Profitec Go Black"
                // style={imageStyle}
              />
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}

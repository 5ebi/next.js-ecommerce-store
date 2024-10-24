import Image from 'next/image';
import { notFound } from 'next/navigation';
import AddToCartButton from '../../components/AddButton';
import productList from '../../data';

// import styles from './page.module.scss';

// This function runs on the server to fetch product data based on the dynamic route parameter
export default async function ProductPage({ params }) {
  const { id } = await params;

  // Find the product based on the dynamic ID (which is brand + model)
  const product = productList.find(
    (p) =>
      `${p.brand.replace(/\s+/g, '').toLowerCase()}-${p.model.replace(/\s+/g, '').toLowerCase()}` ===
      id,
  );

  // If product is not found, return a 404 page
  if (!product) {
    notFound();
  }

  return (
    <main>
      <h1>
        {product.brand} {product.model}
      </h1>
      <h2>Price: ${product.price}</h2>
      <Image
        src={product.colors[0].image} // Show the first color image
        width={500}
        height={500}
        alt={`${product.brand} ${product.model}`}
      />
      <p>This is a great choice for coffee enthusiasts.</p>

      {/* Pass productId to AddToCartButton */}
      <AddToCartButton
        productId={product.id}
        productName={`${product.brand} ${product.model}`}
      />
    </main>
  );
}

// This function will statically generate the paths
export function generateStaticParams() {
  return productList.map((product) => ({
    id: `${product.brand.replace(/\s+/g, '').toLowerCase()}-${product.model.replace(/\s+/g, '').toLowerCase()}`,
  }));
}

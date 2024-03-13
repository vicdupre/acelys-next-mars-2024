import styles from "./page.module.css";
import { Products } from "./lib/types";
import { fetchFakeStore } from "./lib/fakeStoreApiService";

export default async function Home() {
  const products = await fetchFakeStore<Products>("products");

  return (
    <main className={styles.main}>
      <h1>Products</h1>
      {products.map((product) => (
        <a href={`/product/${product.id}`} key={product.id}>
          {product.title}
        </a>
      ))}
    </main>
  );
}

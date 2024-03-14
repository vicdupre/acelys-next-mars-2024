import styles from "./page.module.css";
import { Products } from "./lib/types";
import { fetchFakeStore } from "./lib/fakeStoreApiService";
import Link from "next/link";
import Image from "next/image";
import bagImg from "../public/bag.jpg";

export default async function Home() {
  const products = await fetchFakeStore<Products>("products");

  return (
    <main className={styles.main}>
      <Image src={bagImg} alt="bag" width={300} height={300} />
      <h1>Products</h1>
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          {product.title}
        </Link>
      ))}
    </main>
  );
}

import styles from "./page.module.css";
import { Products } from "./lib/types";
import Link from "next/link";
import Image from "next/image";
import bagImg from "../public/bag.jpg";
import { fetchApi } from "./lib/apiService";

export default async function Home() {
  const products = await fetchApi<Products>("products");

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

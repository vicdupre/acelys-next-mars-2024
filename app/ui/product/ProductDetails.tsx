import { fetchFakeStore } from "@/app/lib/fakeStoreApiService";
import { Product } from "@/app/lib/types";
import Image from "next/image";

const ProductDetails = async ({ id }: { id: string }) => {
  const product = await fetchFakeStore<Product>(`products/${id}`);
  return (
    <div>
      <h2>{product.title}</h2>
      <Image src={product.image} alt="" width={300} height={300} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;

import { fetchFakeStore } from "@/app/lib/fakeStoreApiService";
import { Product } from "@/app/lib/types";

const ProductDetails = async ({ id }: { id: string }) => {
  const product = await fetchFakeStore<Product>(`products/${id}`);
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt="" />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;

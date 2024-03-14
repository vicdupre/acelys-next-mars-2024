import { fetchApi } from "@/app/lib/apiService";
import { fetchFakeStore } from "@/app/lib/fakeStoreApiService";
import { Product } from "@/app/lib/types";
import Image from "next/image";

const ProductDetails = async ({ id }: { id: string }) => {
  const { status, data, error } = await fetchApi<Product>(`products/${id}`);
  if (error) {
    throw new Error(error.message);
  }
  return (
    <div>
      <h2>{data.title}</h2>
      <Image src={data.image} alt="" width={300} height={300} />
      <p>{data.description}</p>
    </div>
  );
};

export default ProductDetails;

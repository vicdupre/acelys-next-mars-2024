import { fetchApi } from "@/app/lib/apiService";
import { fetchFakeStore } from "@/app/lib/fakeStoreApiService";
import { Product } from "@/app/lib/types";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProductDetails = async ({ id }: { id: string }) => {
  const { status, data, error } = await fetchApi<Product>(`products/${id}`);
  if (error) {
    if (status === 404) {
      notFound();
    }
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

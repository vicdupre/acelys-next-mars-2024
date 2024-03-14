import { PageProps } from "@/.next/types/app/page";
import { fetchFakeStore } from "@/app/lib/fakeStoreApiService";
import { Product } from "@/app/lib/types";

import ProductDetails from "@/app/ui/product/ProductDetails";
import ProductRating from "@/app/ui/product/ProductRating";
import { Suspense } from "react";

export const generateMetadata = async ({ params: { id } }: PageProps) => {
  try {
    const product = await fetchFakeStore<Product>(`products/${id}`);
    return {
      title: product.title,
    };
  } catch (error) {
    return {
      title: "Product not found",
    };
  }
};

const ProductPage = ({ params: { id } }: PageProps) => {
  //const product = await fetchFakeStore<Product>(`products/${id}`);
  /*   const name = ["Product", "Rating"];
  console.log(name[2].toLocaleLowerCase()); */
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetails id={id} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductRating id={id} />
      </Suspense>
    </div>
  );
};

export default ProductPage;

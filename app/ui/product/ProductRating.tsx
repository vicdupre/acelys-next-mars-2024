import { fetchRatingWithDelay } from "@/app/lib/fakeStoreApiService";

const ProductRating = async ({ id }: { id: string }) => {
  const rating = await fetchRatingWithDelay(id);
  return (
    <div>
      <h2>Notes des acheteurs</h2>
      <p>
        {rating.rate} / 10 ({rating.count})
      </p>
    </div>
  );
};

export default ProductRating;

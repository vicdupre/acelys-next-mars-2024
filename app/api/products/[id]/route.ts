export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const product = await response.json();

  return Response.json({ data: product, status: 200 });
};

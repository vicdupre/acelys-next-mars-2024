export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    );
    const product = await response.json();
    return Response.json({ data: product, status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({
      error: { message: "Product not found" },
      status: 404,
    });
  }
};

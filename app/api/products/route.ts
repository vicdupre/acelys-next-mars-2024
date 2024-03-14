export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products = await response.json();
  return Response.json({ data: products, status: 200 });
};

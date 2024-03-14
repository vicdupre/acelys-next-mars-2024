export const GET = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    return new Response(JSON.stringify(products), {
        headers: { "content-type": "application/json" },
    });
}
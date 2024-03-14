import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h1>Product Not Found</h1>
      <p>Sorry, the product you are looking for does not exist.</p>
      <Link href={"/"}>Retour aux produits</Link>
    </>
  );
};

export default NotFound;

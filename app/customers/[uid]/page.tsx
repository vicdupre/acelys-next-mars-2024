import { getCustomerById } from "@/app/lib/actions/customerActions";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: {
    uid: string;
  };
}

const Customer = async ({ params: { uid } }: Props) => {
  const customer = await getCustomerById(uid, true);
  if (!customer) {
    notFound();
  }

  return (
    <div>
      <h1>Customer {customer.name}</h1>
      <h2>Invoices</h2>
      <ul>
        {customer.invoices.map((invoice) => (
          <li key={invoice.id}>
            <Link href={`/invoices/${invoice.id}`}>
              {invoice.id} - {(invoice.amount / 100).toFixed(2)}€
            </Link>
          </li>
        ))}
      </ul>
      <Link href={`/customers/${uid}/edit`}>Edit</Link>
    </div>
  );
};

export default Customer;

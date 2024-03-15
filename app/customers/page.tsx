import Link from "next/link";
import { getAllCustomers } from "../lib/actions/customerActions";

const Customers = async () => {
  const customers = await getAllCustomers();
  return (
    <div>
      <h1>Customers</h1>
      <Link href="/customers/create">Create a new customer</Link>
      <ul>
        {customers.map((customer) => (
          <Link href={`/customers/${customer.id}`} key={customer.id}>
            {customer.name} ({customer.invoices.length})
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Customers;

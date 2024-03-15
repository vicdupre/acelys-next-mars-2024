"use client";

import {
  getCustomerById,
  updateCustomer,
} from "@/app/lib/actions/customerActions";
import SubmitButton from "@/app/ui/SubmitButton";
import { Customer } from "@prisma/client";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

const initialState: {
  errors: any[];
} = {
  errors: [],
};
const EditCustomer = () => {
  const { uid }: { uid: string } = useParams();

  const [customer, setCustomer] = useState<Customer | null>(null);
  useEffect(() => {
    (async () => {
      const customer = await getCustomerById(uid);
      if (!customer) {
        alert("Customer not found");
      }
      setCustomer(customer);
    })();
  }, [uid]);
  const updateCustomerWithId = updateCustomer.bind(null, uid);
  const [state, action] = useFormState(updateCustomerWithId, initialState);
  return (
    <form action={action}>
      <h2>Edit {customer?.name}</h2>
      {customer ? (
        <>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={customer.name}
            required
          />
          <SubmitButton />
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </form>
  );
};

export default EditCustomer;

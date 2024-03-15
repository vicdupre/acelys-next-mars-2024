"use client";

import { updateCustomer } from "@/app/lib/actions/customerActions";
import { useParams } from "next/navigation";
import { useFormState } from "react-dom";

const initialState: {
  errors: any[];
} = {
  errors: [],
};
const EditCustomer = () => {
  const { uid }: { uid: string } = useParams();
  const updateCustomerWithId = updateCustomer.bind(null, uid);
  const [state, action] = useFormState(updateCustomerWithId, initialState);
  return <form action={action}></form>;
};

export default EditCustomer;

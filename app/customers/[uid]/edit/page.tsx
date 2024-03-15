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
  const { uid } = useParams();
  const updateCustomerWithId = updateCustomer.bind(null, uid as string);
  const [state, action] = useFormState(updateCustomerWithId, initialState);
  return (
    <form action={action}>
      <input type="hidden" name="uid" value={uid} />
    </form>
  );
};

export default EditCustomer;

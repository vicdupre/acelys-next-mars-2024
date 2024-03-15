"use client";

import { createCustomer } from "@/app/lib/actions/customerActions";
import SubmitButton from "@/app/ui/SubmitButton";
import { useFormState } from "react-dom";

const initialState = {
  errors: [],
};

const CreateCustomer = () => {
  const [state, action] = useFormState(createCustomer, initialState);
  return (
    <div>
      <h2>Create a New Customer</h2>
      {state.errors.length > 0 &&
        state.errors.map((error) => (
          <p
            style={{
              color: "tomato",
            }}
            key={error.message}
          >
            {error.message}
          </p>
        ))}
      <form action={action}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
        <SubmitButton />
      </form>
    </div>
  );
};

export default CreateCustomer;

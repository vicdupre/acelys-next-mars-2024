"use client";

import { createPost } from "@/app/lib/actions";
import SubmitButton from "@/app/ui/SubmitButton";
import { useFormState } from "react-dom";

const CreatePost = () => {
  const [state, action] = useFormState(createPost, {
    message: "",
  });
  return (
    <div>
      <h2>Create a New Post</h2>
      {state.message && <p>{state.message}</p>}
      <form action={action}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" required />
        <SubmitButton />
      </form>
    </div>
  );
};

export default CreatePost;

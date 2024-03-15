import { createPost } from "@/app/lib/actions";
import SubmitButton from "@/app/ui/SubmitButton";

const CreatePost = () => {
  return (
    <div>
      <h2>Create a New Post</h2>
      <form action={createPost}>
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

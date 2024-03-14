import { getPosts } from "../lib/actions";

const Posts = async () => {
  const posts = await getPosts();
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.rows.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

import { PageProps } from "@/.next/types/app/page";

const UserPost = ({ params: { id, post } }: PageProps) => {
  return (
    <h2>
      Poste n° {post} de l&apos;utilisateur {id}
    </h2>
  );
};

export default UserPost;

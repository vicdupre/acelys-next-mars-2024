import { UsersPageProps } from "@/app/lib/types";

const UserPosts = ({ params: { id } }: UsersPageProps) => {
  return <h2>Postes de l&apos;utilisateur : {id}</h2>;
};

export default UserPosts;

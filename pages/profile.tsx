import { GetServerSideProps } from "next";
import { FC } from "react";

type ProfileProps = {
  username: string;
};

const Profile: FC<ProfileProps> = ({ username }) => {
  return <h1>{username}</h1>;
};

const getServerSideProps: GetServerSideProps<ProfileProps> = async (
  context
) => {
  const { params, req, res } = context;

  return {
    props: {
      username: "Mykola"
    }
  };
};

export { getServerSideProps };

export default Profile;

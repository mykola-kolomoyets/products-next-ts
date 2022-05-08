import type { NextPage, GetStaticProps } from "next";

const Home: NextPage = () => {
  return <></>;
};

const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    redirect: {
      destination: "/products"
    }
  };
};

export { getStaticProps };

export default Home;

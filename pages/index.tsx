import type { NextPage, GetStaticProps } from "next";
import ProductList, { ProductListProps } from "../components/product-list";

type MainPageProps = {} & ProductListProps;

const Home: NextPage<MainPageProps> = ({ products }) => {
  return <ProductList products={products} />;
};

const getStaticProps: GetStaticProps<MainPageProps> = async () => {
  return {
    props: {
      products: [
        { id: "p1", title: "Product 1", description: "This is product 1" }
      ]
    }
  };
};

export { getStaticProps };

export default Home;

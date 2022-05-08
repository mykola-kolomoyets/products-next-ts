import type { NextPage, GetStaticProps } from "next";
import fs from "fs/promises";
import path from "path";

import ProductList, { ProductListProps } from "../components/product-list";

type MainPageProps = {} & ProductListProps;

const Home: NextPage<MainPageProps> = ({ products }) => {
  return <ProductList products={products} />;
};

const getStaticProps: GetStaticProps<MainPageProps> = async () => {
  const dataPath = path.join(process.cwd(), "data", "data.json");

  const response = await fs.readFile(dataPath, "utf-8");
  const { products } = await JSON.parse(response);

  return {
    props: { products },
    revalidate: 10
  };
};

export { getStaticProps };

export default Home;

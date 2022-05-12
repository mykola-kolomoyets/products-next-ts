import type { NextPage, GetStaticProps } from "next";

import ProductList, { ProductListProps } from "../../components/product-list";
import ProductsService from "../../api/products";

type MainPageProps = {} & ProductListProps;

const Products: NextPage<MainPageProps> = ({ products }) => {
  return <ProductList products={products} />;
};

const getStaticProps: GetStaticProps<MainPageProps> = async () => {
  const products = ProductsService.getProductList();

  return {
    props: { products },
    revalidate: 10
  };
};

export { getStaticProps };

export default Products;

import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import ProductsService from "../../api/products";
import { Product } from "../../components/product-item";

type ProductViewProps = {
  product: Product;
};

const ProductView: FC<ProductViewProps> = ({ product }) => {
  return (
    <section>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </section>
  );
};

const getStaticProps: GetStaticProps<ProductViewProps> = async (context) => {
  const { params } = context;

  const product = ProductsService.getProductById(params?.id as string);

  if (!product) {
    return {
      notFound: true
    };
  }

  return {
    props: { product }
  };
};

const getStaticPaths: GetStaticPaths = async () => {
  const products = ProductsService.getProductList();

  if (!products?.length) {
    return {
      paths: [],
      fallback: false
    };
  }

  const paths = products?.map(({ id }) => ({
    params: { id }
  }));

  return {
    paths,
    fallback: false
  };
};

export { getStaticProps, getStaticPaths };

export default ProductView;

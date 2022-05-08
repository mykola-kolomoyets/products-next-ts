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
  return {
    paths: [
      { params: { id: "p1" } },
      { params: { id: "p2" } },
      { params: { id: "p3" } }
    ],
    fallback: false
  };
};

export { getStaticProps, getStaticPaths };

export default ProductView;

import { FC } from "react";
import ProductItem, { Product } from "../product-item";
import styles from "./product-list.styles.module.scss";

export type ProductListProps = {
  products: Product[];
};

const ProductList: FC<ProductListProps> = ({ products }) => (
  <ul className={styles.productList}>
    {products?.length &&
      products?.map((product) => <ProductItem key={product.id} {...product} />)}
  </ul>
);

export default ProductList;

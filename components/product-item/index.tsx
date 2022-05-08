import { FC } from "react";
import styles from "./product-item.styles.module.scss";

export type Product = {
  id: string;
  title: string;
  description: string;
};

const ProductItem: FC<Product> = ({ title, description }) => (
  <li className={styles.productItem}>
    <h4 className={styles.productTitle}>{title}</h4>
    <p className={styles.productTitle}>{description}</p>
  </li>
);

export default ProductItem;

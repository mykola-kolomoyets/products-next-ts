import Link from "next/link";
import { FC } from "react";
import styles from "./product-item.styles.module.scss";

export type Product = {
  id: string;
  title: string;
  description: string;
};

const ProductItem: FC<Product> = ({ id, title, description }) => {
  return (
    <li className={styles.productItem}>
      <h4 className={styles.productTitle}>
        <Link href={`/products/${id}`}>{title}</Link>
      </h4>
    </li>
  );
};

export default ProductItem;

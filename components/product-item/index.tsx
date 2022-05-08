import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./product-item.styles.module.scss";

export type Product = {
  id: string;
  title: string;
  description: string;
};

const ProductItem: FC<Product> = ({ id, title, description }) => {
  const router = useRouter();

  const onClick = () => router.push(`/products/${id}`);

  return (
    <li className={styles.productItem}>
      <h4 className={styles.productTitle} onClick={onClick}>
        {title}
      </h4>
    </li>
  );
};

export default ProductItem;

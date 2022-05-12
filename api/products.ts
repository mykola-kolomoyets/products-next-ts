import { Product } from "../components/product-item";

export default class ProductsService {
  private static products: Product[] = [
    { id: "p1", title: "Product 1", description: "This is product 1" },
    { id: "p2", title: "Product 2", description: "This is product 2" },
    { id: "p3", title: "Product 3", description: "This is product 3" }
  ];

  public static getProductList = () => this.products;

  public static getProductById = (id: string) => {
    const foundProduct = this.products.find(product => product.id === id);

    if (!foundProduct) return null;

    return foundProduct;
  }
}
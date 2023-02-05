import { Cart, Product } from "../types";

export const getTotal = (items: Cart, products: Product[]) => {
  const total = Object.keys(items).reduce((total: number, id: string) => {
    const product = products.find((product) => product.id === parseInt(id));
    const price = getPrice(product!);
    total += price * items[parseInt(id)];
    return total;
  }, 0);
  return total;
};

export const getPrice = (product: Product): number =>
  product.salesPrice ? product.salesPrice : product.regularPrice;

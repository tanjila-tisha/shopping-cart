export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  regularPrice: number;
  salesPrice?: number;
}

export interface Cart {
  [key: number]: number;
}

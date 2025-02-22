interface Product {
  id: number;
  name: string;
  price: number;
  shortDescription: string;
  detailedDescription: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

export type { Product, CartItem };


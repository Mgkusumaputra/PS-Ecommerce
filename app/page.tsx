"use client";

import Cart from "./components/cart";
import { CartProvider } from "./components/cartContext";
import { ProductList } from "./components/productList";
import { productDummy } from "./datas";

export default function Home() {
  return (
    <CartProvider>
      <main className="container mx-auto">
        <h1 className="text-3xl mx-5 font-semibold my-7 lg:mx-auto">
          Latest Product
        </h1>
        <div className="flex flex-col mx-5 lg:flex-row lg:mx-auto gap-9 my-8">
          <div className="w-full lg:w-2/3">
            <ProductList products={productDummy} />
          </div>
          <div className="w-full lg:sticky lg:top-0 lg:w-1/3">
            <Cart />
          </div>
        </div>
      </main>
    </CartProvider>
  );
}


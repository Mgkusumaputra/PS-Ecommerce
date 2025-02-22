"use client";

import Image from "next/image";
import { Product } from "../types";
import { ProductModal } from "./productModal";
// import { Button } from "@/components/ui/button";
import { useState } from "react";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div key={product.id} className="group border rounded-lg p-4 flex flex-col">
      <div
        className="relative h-48 overflow-clip rounded group-hover:cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <p className="z-10 transition-colors group-hover:delay-750 ease-linear absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover:visible text-xl font-semibold text-zinc-200">
          View Details
        </p>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={200}
          height={200}
          className="transition-transform duration-500 ease-in-out w-full h-48 object-cover mb-4 rounded group-hover:grayscale group-hover:scale-125"
        />
      </div>
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2 flex-grow">{product.shortDescription}</p>
      <span className="text-lg font-bold mt-4">
        {formatPrice(product.price)}
      </span>
      <ProductModal
        key={product.id}
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}


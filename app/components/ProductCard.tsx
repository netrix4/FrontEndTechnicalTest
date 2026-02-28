import React from "react";
import { Product } from "@/app/model/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex space-x-20 bg-[#bbb2b2] rounded-xl shadow-md py-0.5 px-7">
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

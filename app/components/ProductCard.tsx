import React from "react";
import { Product } from "@/app/model/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex space-x-10 bg-[#bbb2b2] rounded-xl shadow-md py-0.5 px-7">
      <p>Nombre: {product.name}</p>
      <p>Descripcion: {product.description}</p>
      <p>Precio: {String(product.price)}</p>
    </div>
  );
}

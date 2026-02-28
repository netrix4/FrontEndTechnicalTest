import React from "react";
import { Product } from "@/app/model/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return <div>ProductCard</div>;
}

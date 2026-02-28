import ProductCard from "../components/ProductCard";
import { Product } from "../model/product";
import { GETProducts } from "../service/productService";

export default async function HomeContent() {
  const products: Product[] = await GETProducts();
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-b from-[#599ee4] to-[#0565c5] h-screen w-full">
      <div className="flex flex-col gap-4 h-2/3  w-2/3 bg-[#ebe0e0]  border-2 rounded-lg items-center justify-center">
        <p>Clickea para navegar entre rutas</p>
        <a href="/api/products" className="text-blue-600 hover:text-blue-800">
          Click here
        </a>
        <ProductCard product={products[0]} />
      </div>
    </div>
  );
}

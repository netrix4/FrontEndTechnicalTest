import { GETProducts } from "@/app/service/productService";

export async function GET(request: Request) {
  const products = await GETProducts();

  // Get to know top expensive product is due to a busines rule or requirement
  const filteredProducts = products.filter(
    (product) => Number(product.price) > 30,
  );
  return new Response(JSON.stringify(filteredProducts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

import { ADDProduct, GETProducts } from "@/app/service/productService";

export async function GET(request: Request) {
  const products = await GETProducts();
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, description, price } = body;

  const newProduct = { name, description, price };

  const insertedProduct = await ADDProduct(newProduct);

  return new Response(JSON.stringify(insertedProduct), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

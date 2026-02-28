import { GETProductById } from "@/app/service/productService";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = (await params).id;
    const product = await GETProductById(Number(id));

    return Response.json(product);
  } catch (error) {
    return Response.json(
      { error: "Internal Server Error", details: String(error) },
      { status: 500 },
    );
  }
}

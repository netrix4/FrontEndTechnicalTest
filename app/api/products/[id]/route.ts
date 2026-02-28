import { GETProductById } from "@/app/service/productService";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    // const id = (await context.params).id;
    // const id = context.params.id;

    const numericId = Number(id);

    if (isNaN(numericId)) {
      return Response.json({ error: "Invalid ID" }, { status: 400 });
    }

    const product = await GETProductById(Number(numericId));

    return Response.json(product);
  } catch (error) {
    return Response.json(
      { error: "Internal Server Error", details: String(error) },
      { status: 500 },
    );
  }
}

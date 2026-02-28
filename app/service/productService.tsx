import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";
import { Product } from "../model/product";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export async function GETProducts() {
  
  const products = await prisma.products.findMany();
  return products;
}
// Getting the besto of the resources that prisma brings
// may also be a great option if busines logic dont get in the middle
export async function GETProductById(id: number) {
  const product = await prisma.products.findUnique({ where: { id: id } });
  return product;
}
export async function ADDProduct(product: Product) {
  const response = await prisma.products.create({ data: product });
  return response;
}

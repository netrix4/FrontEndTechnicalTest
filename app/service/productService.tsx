import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export async function GETProduct() {
  const users = await prisma.products.findMany();
  return users;
}
// Getting the besto of the resources that prisma brings
// may also be a great option if busines logic dont get in the middle
export async function GETProductById(id: number) {
  const users = await prisma.products.findUnique({ where: { id: id } });
  return users;
}
export async function ADDProduct(product: Product) {
  const response = await prisma.products.create({ data: product });
  return response;
}

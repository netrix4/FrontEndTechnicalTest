import { Decimal } from "@prisma/client/runtime/client";

export class Product {
  name: string;
  description: string;
  price: Decimal;
  constructor(name: string, description: string, price: Decimal) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

import { Category } from "./categories";

export class Product {
  id!: number;
  category!: Category;
  label!: string;
  picture!: string;
  description!: string;
  unitPriceHt!: number;
  minOrderQuantity!: number;
  isVisible!: boolean;
}

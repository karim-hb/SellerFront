import { __ImageAttachment } from "./general";

export interface __Product {
  id: number | null;
  title: string;
  descrption: string;
  price: number | null;
  inventory: number | null;
  last_update?: string;
  image: __ImageAttachment | null;
  discount?: number;
  slug?: string;
}
export interface __OrderDataOptions{
    title: string;
}
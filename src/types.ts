export interface StyledProps {
  pathname: string;
}
export interface BOOK {
  id?: string | number;
  title: string;
  price: number;
  description: string;
}
export interface CART_ITEM {
  title: string;
  quantity: number;
  total: number;
  price: number;
}

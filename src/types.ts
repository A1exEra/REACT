export interface StyledProps {
  pathname: string;
}
export interface MEAL {
  id: string;
  name: string;
  description: string;
  price: number;
}
export interface INPUT {
  [key: string]: string;
}
export interface CART_ITEM {
  id: string;
  name: string;
  amount: number;
  price: number;
}
export interface ORDER_FORM {
  // name: string;
  // street: string;
  // postCode: string;
  // city: string;
  [key: string]: string;
}

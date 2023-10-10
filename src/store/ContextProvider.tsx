/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, useReducer } from 'react';
import { createContext } from 'react';
import { CART_ITEM } from '../types';
export const CartContext = createContext({
  items: [] as CART_ITEM[],
  totalAmount: 0,
  // totalPrice: 0,
  addItem: (item: CART_ITEM) => {},
  removeItem: (id: string) => {},
  emptyCart: () => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (
  state: { items: CART_ITEM[]; totalAmount: number },
  action: { type: string; item?: CART_ITEM; id?: string }
) => {
  //add item
  if (action.type === 'ADD_ITEM' && action.item) {
    let updatedItems;
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount!;
    //check if existing item already exists
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item!.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, action.item];
    }
    // const updatedItems = state.items.concat(action.item);
    // const updatedItems = [...state.items, action.item];
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  //remove item
  if (action.type === 'REMOVE' && action.id) {
    let updatedItems: CART_ITEM[] = [];
    //check if existing item already exists
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    // ...
    if (existingCartItem.amount === 1) {
      updatedItems = updatedItems!.filter(
        (item: CART_ITEM) => item.id !== action.id
      );
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'EMPTY_CART') {
    return defaultCartState;
  }
  return defaultCartState;
};
function ContextProvider(props: { children: ReactNode }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCart = (item: CART_ITEM) => {
    dispatchCartAction({
      type: 'ADD_ITEM',
      item: item,
    });
  };
  const removeItemFromCart = (id: string) => {
    dispatchCartAction({
      type: 'REMOVE',
      id: id,
    });
  };
  const emptyCartHandler = () => {
    dispatchCartAction({
      type: 'EMPTY_CART',
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    emptyCart: emptyCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default ContextProvider;

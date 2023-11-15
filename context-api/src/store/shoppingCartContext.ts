import { createContext } from "react";
import { ProductType } from "../../dummy-products";

export interface ItemType extends ProductType {
  quantity: number;
}

export type CartContextType = {
  items: ItemType[];
  onAddItemToCart: (item: ItemType) => void;
  onUpdateItemQuantity: (id: string, addOrDecreaseQuantity: number) => void;
  onToggleModal: () => void;
  isOpenModal: boolean;
};

export const CartContext = createContext({} as CartContextType);

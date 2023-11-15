import React, { useState } from "react";
import { CartContext, CartContextType, ItemType } from "./shoppingCartContext";

type CartCType = {
  children: React.ReactNode;
};

export function CartContextProvider({ children }: CartCType) {
  const [shoppingCart, setShoppingCart] = useState<CartContextType>({
    items: [],
    onAddItemToCart: handleAddItemToCart,
    onUpdateItemQuantity: handleUpdateQuantity,
    onToggleModal: toggleModal,
    isOpenModal: false,
  });

  const [openModal, setOpenModal] = useState(false);

  function toggleModal() {
    setOpenModal((prevState) => !prevState);
  }

  function handleAddItemToCart(item: ItemType) {
    if (shoppingCart.items.includes(item)) return;

    const newItem = item;
    newItem.quantity = 1;

    setShoppingCart((prevState) => {
      return {
        ...prevState,
        items: [...prevState.items, newItem],
      };
    });
  }

  function handleUpdateQuantity(id: string, addOrDecreaseQuantity: number) {
    const currentItem = shoppingCart.items.find((item) => item.id === id);
    currentItem!.quantity += addOrDecreaseQuantity;

    setShoppingCart((prevState) => {
      return {
        ...prevState,
      };
    });
  }

  const obj: CartContextType = {
    items: shoppingCart.items,
    onAddItemToCart: handleAddItemToCart,
    onUpdateItemQuantity: handleUpdateQuantity,
    onToggleModal: toggleModal,
    isOpenModal: openModal,
  };

  return <CartContext.Provider value={obj}>{children}</CartContext.Provider>;
}

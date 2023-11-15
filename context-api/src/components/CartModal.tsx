import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../store/shoppingCartContext";

interface Props {
  title: string;
  actions: React.ReactNode;
}

export default function CartModal({ title, actions }: Props) {
  const { isOpenModal } = useContext(CartContext);
  return (
    <dialog id="modal" open={isOpenModal}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>
  );
}

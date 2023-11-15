import { useContext } from "react";
import { CartContext } from "../store/shoppingCartContext";
import CartModal from "./CartModal";

export default function Header() {
  const { items, onToggleModal } = useContext(CartContext);

  const cartQuantity = items.length;

  let modalActions = (
    <button onClick={onToggleModal}>
      {cartQuantity > 0 ? "Checkout" : "Close"}
    </button>
  );

  return (
    <>
      <CartModal title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={onToggleModal}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}

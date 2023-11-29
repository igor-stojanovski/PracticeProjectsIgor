import { currencyFormatter } from "../helpers/formatting";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDeacrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDeacrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}

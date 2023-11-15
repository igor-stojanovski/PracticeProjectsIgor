import { useContext } from "react";
import { CartContext, ItemType } from "../store/shoppingCartContext";
import { ProductType } from "../../dummy-products";
import DUMMY_PRODUCTS from "../../dummy-products";

export default function Product({
  description,
  id,
  image,
  price,
  title,
}: ProductType) {
  const { onAddItemToCart } = useContext(CartContext);

  const item = DUMMY_PRODUCTS.find((item) => item.id === id) as ItemType;

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => onAddItemToCart(item)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}

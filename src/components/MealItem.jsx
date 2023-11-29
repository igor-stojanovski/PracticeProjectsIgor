import { useContext } from "react";
import { currencyFormatter } from "../helpers/formatting";
import Button from "../UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

export default function MealItem({ meal }) {
  const { addItem } = useContext(CartContext);

  function handleAddMealItemToCart() {
    addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealItemToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}

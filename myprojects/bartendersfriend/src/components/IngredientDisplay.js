const IngredientDisplay = ({ingredient}) => {
  return <li>
    <p>{ingredient.ingredient}: {ingredient.ounces} {ingredient.ounces === "1" ? 'ounce' : 'ounces'}. Bottle Size&#58;&nbsp;{ingredient.bottleSize}{ingredient.bottleType}</p>
  </li>;
};

export default IngredientDisplay;

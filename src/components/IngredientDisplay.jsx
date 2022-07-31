import React from 'react';
import PropTypes from 'prop-types';

function IngredientDisplay({ ingredient }) {
  return (
    <li>
      <p>
        {ingredient.ingredient}
        :&nbsp;
        {ingredient.ounces}&nbsp;
        {ingredient.ounces === '1'
          ? 'ounce' : 'ounces'}
        ,&nbsp;Bottle Size&#58;&nbsp;
        {ingredient.bottleSize}
        {ingredient.bottleType}
      </p>
    </li>
  );
}
IngredientDisplay.propTypes = {
  ingredient: PropTypes.object
};

export default IngredientDisplay;

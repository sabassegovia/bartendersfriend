import React from 'react';
import PropTypes from 'prop-types';

function IngredientDisplayConfirmation({ingredient}) {
  return (
    <li>
            <p>
        {ingredient.name}
        :&nbsp;
        {ingredient.ounces}&nbsp;
        {ingredient.ounces === '1'
          ? 'ounce' : 'ounces'}
        ,&nbsp;Bottles needed&#58;&nbsp;
{ingredient.bottlesNeeded}

      </p>
    </li>
  );
}
IngredientDisplayConfirmation.propTypes = {
  ingredient: PropTypes.object
};

export default IngredientDisplayConfirmation;
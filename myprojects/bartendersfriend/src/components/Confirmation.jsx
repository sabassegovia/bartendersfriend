import React from 'react';
import IngredientDisplay from './IngredientDisplay';

function Confirmation() {
  const drinkName = JSON.parse(localStorage.getItem('drinkName')) || '';
  const drinkVolume = JSON.parse(localStorage.getItem('drinkVolume')) || '';
  const batchType = JSON.parse(localStorage.getItem('batchType')) || '';
  const dataArray = JSON.parse(localStorage.getItem('dataArray')) || '';

  let conditionalBatchConfirmation = '';
  if (batchType === 'people') {
    conditionalBatchConfirmation = (
      <>
        We want to make
        {drinkName}
        for
        {drinkVolume}
        {batchType}
      </>
    );
  } else {
    conditionalBatchConfirmation = (
      <>
        We want to make
        {drinkVolume}
        {batchType}
        of
        {drinkName}
      </>
    );
  }
  return (
    <>
      {conditionalBatchConfirmation}
      <p>&#49; cocktail contains:</p>
      <ol>
        {dataArray.map((ingredient, i) => (
          <IngredientDisplay
            ingredient={ingredient}
            key={ingredient.ounces + Date.now()}
          />
        ))}
      </ol>
    </>
  );
}

export default Confirmation;

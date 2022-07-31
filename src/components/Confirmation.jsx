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
        We want to make&nbsp;
        {drinkName}&nbsp;
        for&nbsp;
        {drinkVolume}&nbsp;
        {batchType}
      </>
    );
  } else {
    conditionalBatchConfirmation = (
      <>
        We want to make&nbsp;
        {drinkVolume}&nbsp;
        {batchType}&nbsp;
        of&nbsp;
        {drinkName}
      </>
    );
  }
  return (
    <>
      {conditionalBatchConfirmation}
      <p>&#49;&nbsp;cocktail contains:</p>
      <ol>
        {dataArray.map((ingredient) => (
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

import React from 'react';
import IngredientDisplayConfirmation from './IngredientDisplayConfirmation.jsx';

function DisplayDrink() {
  const drinkName = JSON.parse(localStorage.getItem('drinkName'));
  const drinkVolume = JSON.parse(localStorage.getItem('drinkVolume')) || '';
  const batchType = JSON.parse(localStorage.getItem('batchType')) || '';
  const dataArray = JSON.parse(localStorage.getItem('dataArray')) || '';

  let finalData = [];
  if (batchType === 'people') {
    dataArray.forEach((ingredient) => {
      let ounces = Number(ingredient.ounces) * Number(drinkVolume);
      let bottleConvertedToOunces = 0;
      //convert bottle into ounces
      if (ingredient.bottleType === 'L') {
        bottleConvertedToOunces = Number(ingredient.bottleSize) * (33.814);
      } else if (ingredient.bottleType === 'mL') {
        bottleConvertedToOunces = Number(ingredient.bottleSize) * (.033814);
      } else if (ingredient.bottleType === 'Gallons') {
        bottleConvertedToOunces = Number(ingredient.bottleSize) * (128);
      }

      finalData.push({ 'name': String((ingredient.ingredient)), 'ounces': ounces, 'bottlesNeeded': Math.ceil(Number(ounces) / bottleConvertedToOunces) });
    })
  }



  if (batchType === undefined) {
    return <>loading</>
  } else {
    return (
      <>
        <br />
        This is what you&#39;ll need to make {drinkName} for {drinkVolume} {batchType}&#58;&nbsp;
        <ol>
          {batchType === 'people' ? <>{finalData.map((ingredient) => {
            return <IngredientDisplayConfirmation
              ingredient={ingredient}
              key={ingredient.ounces + Date.now()}
            />
          })}
          </> : ""}
          {batchType === 'liters' ? <>n</> : ""}
          {batchType === 'gallons' ? <>kj</> : ""}
        </ol>
      </>
    );
  }
}
export default DisplayDrink;

{/* // {dataArray.map((ingredient) => (
//   <IngredientDisplay
//     ingredient={ingredient}
//     key={ingredient.ounces + Date.now()}
//   /> */}
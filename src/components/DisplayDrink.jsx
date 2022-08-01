import React from 'react';
import IngredientDisplayConfirmation from './IngredientDisplayConfirmation.jsx';

function DisplayDrink() {
  const drinkName = JSON.parse(localStorage.getItem('drinkName'));
  const drinkVolume = JSON.parse(localStorage.getItem('drinkVolume')) || '';
  const batchType = JSON.parse(localStorage.getItem('batchType')) || '';
  const dataArray = JSON.parse(localStorage.getItem('dataArray')) || '';

  let totalOz = 0;
  dataArray.forEach((ingredient) => {
    totalOz += Number(ingredient.ounces);
  })
  let finalData = [];
  let ounces = 0, bottleConverted = 0;
  if (batchType === 'people') {
    dataArray.forEach((ingredient) => {
      ounces = Number(ingredient.ounces) * Number(drinkVolume);
      //convert bottle into ounces
      if (ingredient.bottleType === 'L') {
        bottleConverted = Math.ceil(Number(ingredient.bottleSize) * (33.814));
      } else if (ingredient.bottleType === 'mL') {
        bottleConverted = Number(ingredient.bottleSize) * (.033814);
      } else if (ingredient.bottleType === 'Gallons') {
        bottleConverted = Number(ingredient.bottleSize) * (128);
      }
      finalData.push({
        'name': String((ingredient.ingredient)),
        'ounces': ounces,
        'bottlesNeeded': Math.ceil(Number(ounces) / bottleConverted)
      });
    });
  }

  if (batchType === 'liters') {
    dataArray.forEach((ingredient) => {
      let ratio = Number(ingredient.ounces) / Number(totalOz);
      ounces = ratio * 33.814 * Number(drinkVolume);
      console.log(ounces);
      if (ingredient.bottleType === 'L') {
        bottleConverted = Math.ceil(Number(ingredient.bottleSize) * (33.814));
      } else if (ingredient.bottleType === 'mL') {
        bottleConverted = Number(ingredient.bottleSize) * (.033814);
      } else if (ingredient.bottleType === 'Gallons') {
        bottleConverted = Number(ingredient.bottleSize) * (128);
      }
      finalData.push({
        'name': String((ingredient.ingredient)),
        'ounces': Math.round(ounces/.5) *.5,
        'bottlesNeeded': Math.ceil(Number(ounces) / bottleConverted)
      });
    });
  }

  if (batchType === 'gallons') {
    dataArray.forEach((ingredient) => {
      let ratio = Number(ingredient.ounces) / Number(totalOz);
      ounces = ratio * 128 * Number(drinkVolume);
      console.log(ounces);
      if (ingredient.bottleType === 'L') {
        bottleConverted = Math.ceil(Number(ingredient.bottleSize) * (33.814));
      } else if (ingredient.bottleType === 'mL') {
        bottleConverted = Number(ingredient.bottleSize) * (.033814);
      } else if (ingredient.bottleType === 'Gallons') {
        bottleConverted = Number(ingredient.bottleSize) * (128);
      }
      finalData.push({
        'name': String((ingredient.ingredient)),
        'ounces': Math.round(ounces/.5) *.5,
        'bottlesNeeded': Math.ceil(Number(ounces) / bottleConverted)
      });
    });
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
          {batchType === 'liters' ? <>{finalData.map((ingredient) => {
            return <IngredientDisplayConfirmation
              ingredient={ingredient}
              key={ingredient.ounces + Date.now()}
            />
          })}
          </> : ""}
          {batchType === 'gallons' ? <>{finalData.map((ingredient) => {
            return <IngredientDisplayConfirmation
              ingredient={ingredient}
              key={ingredient.ounces + Date.now()}
            />
          })}
          </> : ""}
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
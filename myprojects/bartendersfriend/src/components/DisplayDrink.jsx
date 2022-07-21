import React from 'react';

function DisplayDrink() {
  const drinkName = JSON.parse(localStorage.getItem('drinkName'));
  const drinkVolume = JSON.parse(localStorage.getItem('drinkVolume'));
  const batchType = JSON.parse(localStorage.getItem('batchType'));
  const dataArray = JSON.parse(localStorage.getItem('dataArray'));
  let singleDrinkOz = 0;
  dataArray.forEach((ingredient) => {
    singleDrinkOz += Number(ingredient.ounces);
  });
  let batchOzCtr = 0;
  if (batchType === 'drinks') {
    batchOzCtr = Number(singleDrinkOz) * Number(drinkVolume);
  }

  return (
    <>
      single:
      {singleDrinkOz}
      <br />
      Batch:
      {batchOzCtr}
    </>
  );
}
export default DisplayDrink;

// calculations

import React, { useState } from 'react';
import AddIngredient from './AddIngredient';
import AddIngredientCSS from '../styles/AddIngredient.module.css'
function AddDrink() {
  const [drinkName, setDrinkName] = useState('');
  const [drinkInfo, setDrinkInfo] = useState([
    {
      ingredient: '',
      ounces: 0,
      bottleSize: '',
      bottleType: '',
    },
    {
      ingredient: '',
      ounces: 0,
      bottleSize: '',
      bottleType: '',
    },
    {
      ingredient: '',
      ounces: 0,
      bottleSize: '',
      bottleType: '',
    },
    {
      ingredient: '',
      ounces: 0,
      bottleSize: '',
      bottleType: '',
    },
    {
      ingredient: '',
      ounces: 0,
      bottleSize: '',
      bottleType: '',
    },
    {
      ingredient: '',
      ounces: 0,
      bottleSize: '',
      bottleType: '',
    },
    {
      ingredient: '',
      ounces: 0,
      bottleSize: '',
      bottleType: '',
    },
    {
      ingredient: '',
      ounces: 0,
      bottleSize: '',
      bottleType: '',
    },
    {
      ingredient: '',
      ounces: 0,
      bottleSize: '',
      bottleType: '',
    },
    {
      ingredient: '',
      ounces: 0,
      bottleSize: '',
      bottleType: '',
    },
  ]);
  const MAX_INGREDIENTS = 10;
  const rowsToDisplay = () => {
    const row = [];
    for (let i = 0; i < MAX_INGREDIENTS; i += 1) {
      row.push(
        <AddIngredient
          ingredient={drinkInfo}
          index={i}
          setDrinkInfo={setDrinkInfo}
          key={i}
        />,
      );
    }
    return row;
  };

  const validateAndPostData = () => {
    const localStorageArrayForIngredients = [];

    for (let i = 0; i < MAX_INGREDIENTS; i += 1) {
      if (drinkName === '') {
        // alert('Please enter a drink name');
        const alert = 'Please enter a drink name';
        alert();
        break;
      }
      if (
        drinkInfo[i].ingredient !== ''
        && drinkInfo[i].bottleType !== ''
        && drinkInfo[i].bottleSize !== ''
      ) {
        const tempObj = {
          ingredient: drinkInfo[i].ingredient,
          ounces: drinkInfo[i].ounces,
          bottleSize: drinkInfo[i].bottleSize,
          bottleType: drinkInfo[i].bottleType,
        };
        localStorageArrayForIngredients.push(tempObj);
      } else {
        break;
      }
    }

    const stringifiedData = JSON.stringify(localStorageArrayForIngredients);
    const stringifiedName = JSON.stringify(drinkName);
    localStorage.setItem('dataArray', stringifiedData);
    localStorage.setItem('drinkName', stringifiedName);
  };
  return (
    <div className={AddIngredientCSS.addIngredient}>
      <label>
        Name of drink&#58;&nbsp;
        <input
          type="text"
          placeholder="name of drink..."
          onChange={(e) => setDrinkName(e.target.value)}
          value={drinkName}
        />
      </label>
      <ol className={AddIngredientCSS.wrapDiv}>{rowsToDisplay()}</ol>
      <button className={AddIngredientCSS.submitBtn} onClick={validateAndPostData} type="submit">Submit Data</button>
      <p>&nbsp;</p>
    </div>
  );
}
export default AddDrink;

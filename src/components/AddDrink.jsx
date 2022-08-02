import React, { useState } from 'react';
// import AddIngredient from './AddIngredient';
import AddIngredientCSS from '../styles/AddIngredient.module.css'
function AddDrink() {
  const [drinkName, setDrinkName] = useState('');
  const [drinkInfo, setDrinkInfo] = useState([{
      ingredient: '',
      ounces: 0,
      bottleSize: '',
      bottleType: '',
  }]);

  const validateAndPostData = (event) => {

    const localStorageArrayForIngredients = [];
    if (drinkName === '') {
      alert('Please enter a drink name');
      return;
    }
    console.log('in validate and post data');
    for (let i = 0; i < drinkInfo.length; i += 1) {
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

  const handleFormChange = (index, event) => {
    let data = [...drinkInfo];
    data[index][event.target.name] = event.target.value;
    setDrinkInfo(data);
  }
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

      <ol className={AddIngredientCSS.wrapDiv}>
        {drinkInfo.map((input, index) => {
          return (
            <li>
              <label>
                Ingredient&#58;&nbsp;
                <input
                  type="text"
                  placeholder="name of ingredient..."
                  name="ingredient"
                  value={drinkInfo.ingredient}
                  onChange={(event) => handleFormChange(index, event)}
                />
              </label>

              <label>
                &nbsp;&nbsp;&nbsp;Ounces&#58;&nbsp;
                <input
                  type="number"
                  placeholder="enter a number"
                  name="ounces"
                  step=".25"
                  value={drinkInfo.ounces}
                  onChange={(event) => handleFormChange(index, event)}
                />
              </label>

              <label>
                &nbsp;&nbsp;&nbsp;Size&#58;&nbsp;
                <input
                  type="number"
                  placeholder="size of bottle..."
                  name="bottleSize"
                  value={drinkInfo.bottleSize}
                  onChange={(event) => handleFormChange(index, event)}
                />
                <select
                  name="bottleType"
                  onChange={(event) => handleFormChange(index, event)}>
                  <option value="">Pick a size...</option>
                  <option value="mL">mL</option>
                  <option value="L">L</option>
                  <option value="Gallons">Gallons</option>
                </select>
              </label>
            </li>
          )
        })}
      </ol>
      <button className={AddIngredientCSS.submitBtn} onClick={(event) => validateAndPostData(event)} type="submit">Submit Data</button>
      <p>&nbsp;</p>
    </div>
  );
}
export default AddDrink;

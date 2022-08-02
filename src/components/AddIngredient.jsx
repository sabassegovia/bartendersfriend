import React from 'react';
import PropTypes from 'prop-types';

function AddIngredient({ index, ingredient, setDrinkInfo }) {
  const updateIngredient = (e) => {
    const newArr = [...ingredient];
    newArr[index][e.target.id] = e.target.value;
    setDrinkInfo(newArr);
  };

  const updateOunces = (e) => {
    e.preventDefault();
    const newArr = [...ingredient];
    newArr[index].ounces = e.target.value;
    setDrinkInfo(newArr);
  };

  const updateBottleVolume = (e) => {
    e.preventDefault();
    const newArr = [...ingredient];
    newArr[index].bottleSize = e.target.value;
    setDrinkInfo(newArr);
  };

  const updateBottleType = (e) => {
    e.preventDefault();
    const newArr = [...ingredient];
    newArr[index].bottleType = e.target.value;
    setDrinkInfo(newArr);
  };

  return (
    <li>
      <label>
        Ingredient&#58;&nbsp;
        <input
          type="text"
          placeholder="name of ingredient..."
          id="ingredient"
          onChange={updateIngredient}
        />
      </label>

      <label>
        &nbsp;&nbsp;&nbsp;Ounces&#58;&nbsp;
        <input
          type="number"
          placeholder="enter a number"
          id="ounces"
          step=".25"
          onChange={updateOunces}
          value={ingredient[index].ounces}
        />
      </label>

      <label>
        &nbsp;&nbsp;&nbsp;Size&#58;&nbsp;
        <input
          type="number"
          placeholder="size of bottle..."
          onChange={updateBottleVolume}
          id="bottleSize"
        />
        <select name="cars" id="cars" onChange={updateBottleType}>
          <option value="">Pick a size...</option>
          <option value="mL">mL</option>
          <option value="L">L</option>
          <option value="Gallons">Gallons</option>
        </select>
      </label>
    </li>
  );
}
AddIngredient.propTypes = {
  index: PropTypes.number,
  ingredient: PropTypes.array,
  setDrinkInfo: PropTypes.func
};
export default AddIngredient;

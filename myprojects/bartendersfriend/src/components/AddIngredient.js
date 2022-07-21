import React from "react";

const AddIngredient = (props) => {
  const updateIngredient = (e) => {
    // e.preventDefault();
    console.log("index:", props.index);
    console.log("value:", e.target.value);
    let newArr = [...props.ingredient];
    newArr[props.index][e.target.id] = e.target.value;
    props.setDrinkInfo(newArr);
  };

  const updateOunces = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    let newArr = [...props.ingredient];
    newArr[props.index].ounces = e.target.value;
    props.setDrinkInfo(newArr);
  };

  const updateBottleVolume = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    let newArr = [...props.ingredient];
    newArr[props.index].bottleSize = e.target.value;
    props.setDrinkInfo(newArr);
  };

  const updateBottleType = (e) => {
    e.preventDefault();
    let newArr = [...props.ingredient];
    newArr[props.index].bottleType = e.target.value;
    props.setDrinkInfo(newArr);
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
          // value={props.ingredient[props.index].ingredient || ""}
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
          value={props.ingredient[props.index].ounces}
        />
      </label>

      <label>
        &nbsp;&nbsp;&nbsp;Bottle Size&#58;&nbsp;
        <input
          type="number"
          placeholder="size of bottle..."
          onChange={updateBottleVolume}
          id="bottleSize"
        />
                  <select name="cars" id="cars" onChange={updateBottleType}>
            <option value="mL">mL</option>
            <option value="L">L</option>
            <option value="Gallons">Gallons</option>
          </select>
      </label>
    </li>
  );
};

export default AddIngredient;
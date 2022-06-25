import React from "react";
import AddIngredientCSS from "../styles/AddIngredient.module.css";

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
    newArr[props.index].bottleType = e.target.id;
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
        <div className={AddIngredientCSS.dropdown}>
          <button className={AddIngredientCSS.dropbtn}>Size</button>
          <div className={AddIngredientCSS.dropdownContent}>
            <a href="#" id="mL" onClick={updateBottleType}>
              mL
            </a>
            <a href="#" id="L" onClick={updateBottleType}>
              L
            </a>
            <a href="#" id="Gal" onClick={updateBottleType}>
              Gal
            </a>
          </div>
        </div>
      </label>
    </li>
  );
};

export default AddIngredient;
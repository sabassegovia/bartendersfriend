import React, {useState} from 'react';
import AddIngredient from "./AddIngredient.js";

const AddDrink = (props) => {
  const [drinkName, setDrinkName] = useState("");
  const [drinkInfo, setDrinkInfo] = useState([
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
  ]);
  const MAX_INGREDIENTS = 10;
  const rowsToDisplay = () => {
    let row = [];
    for (let i = 0; i < MAX_INGREDIENTS; i++) {
      row.push(
        <>
          <AddIngredient
            ingredient={drinkInfo}
            index={i}
            setDrinkInfo={setDrinkInfo}
            key={i}
          />
        </>
      );
    }
    return row;
  };

  const validateAndPostData = () => {
    let localStorageArrayForIngredients = [];

    for (let i = 0; i < MAX_INGREDIENTS; i++) {
      if (drinkName === "") {
        console.log("Please enter a drink name");
        alert("Please enter a drink name");
        break;
      }
      if (
        drinkInfo[i].ingredient !== "" &&
        drinkInfo[i].bottleType !== "" &&
        drinkInfo[i].bottleSize !== ""
      ) {
        let tempObj = {
          ingredient: drinkInfo[i].ingredient,
          ounces: drinkInfo[i].ounces,
          bottleSize: drinkInfo[i].bottleSize,
          bottleType: drinkInfo[i].bottleType,
        };
        localStorageArrayForIngredients.push(tempObj);
      } else {
        console.log(i);
        break;
      }

    }

    let stringifiedData = JSON.stringify(localStorageArrayForIngredients);
    let stringifiedName = JSON.stringify(drinkName);
    localStorage.setItem("dataArray", stringifiedData);
    localStorage.setItem("drinkName", stringifiedName);
  };
  return (
    <>
      <label>
        Name of drink&#58;&nbsp;
        <input
          type="text"
          placeholder="name of drink..."
          onChange={(e) => setDrinkName(e.target.value)}
          value={drinkName}
        />
      </label>
      <ol>{rowsToDisplay()}</ol>
      <button onClick={validateAndPostData}>submit data</button>
    </>
  );
}
export default AddDrink;
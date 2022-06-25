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
    let atleast1RowIsComplete = false;
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
        // console.log(drinkInfo[i].ingredient);
        // console.log(drinkInfo[i].ounces);
        // console.log(drinkInfo[i].bottleSize, drinkInfo[i].bottleType);
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
      {/* <p>&#43;&nbsp;Add another&nbsp;&#43;</p> */}
      <button onClick={validateAndPostData}>submit data</button>
    </>
  );
  // render() {
  //   return (
  //   //   <div className="addDrinkInput">
  //   //     <form>
  //   //       <label>
  //   //         Ingredient&#58;&nbsp;
  //   //       </label>
  //   //       <input
  //   //         type="text"
  //   //         value={this.state.ingredient}
  //   //         onChange={this.handleChange}
  //   //       />&nbsp;&nbsp;
  //   //       <label>
  //   //         Amount&#40;oz&#41;&#58;&nbsp;
  //   //       </label>
  //   //       <input
  //   //         type="number"
  //   //         min="0"
  //   //         step=".25"
  //   //         value={this.state.amount}
  //   //         onChange={this.handleChange}
  //   //       />
  //   //     </form>
  //   //  </div>
  //   )
  // }
}
export default AddDrink;
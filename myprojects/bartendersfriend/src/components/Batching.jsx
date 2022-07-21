import React from 'react';

function Batching() {
  const drinkName = JSON.parse(localStorage.getItem('drinkName'));
  return (
    <div>

      <form>
        <label>
          {drinkName}
          will be made for&nbsp;
        </label>
        <input
          type="number"
          placeholder="enter a number"
          id="ounces"
          step=".25"
          onChange={(e) => localStorage.setItem('drinkVolume', JSON.stringify(e.target.value))}
        />
        <select
          name="cars"
          id="cars"
          onChange={(e) => localStorage.setItem('batchType', JSON.stringify(e.target.value))}
        >
          <option value="">batch...</option>
          <option value="drinks">Drinks</option>
          <option value="gallons">Gallons</option>
          <option value="liters">Liters</option>
        </select>
      </form>
    </div>

  );
}

export default Batching;

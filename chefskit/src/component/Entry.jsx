import React from "react";
import "../styling/entry.css";
const Entry = () => {
  const ingredients = ["chicken", "oregano", "Tomatoes"];
  const ingredientList = ingredients.map((ingredient) => <li>{ingredient}</li>);
  const submitOutput = () => console.log("input is submitted");
  return (
    <main>
      <form className="add-ingredient-form" onSubmit={submitOutput}>
        <input
          type="text"
          placeholder="e.g chicken"
          aria-label="Add ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientList}</ul>
    </main>
  );
};

export default Entry;

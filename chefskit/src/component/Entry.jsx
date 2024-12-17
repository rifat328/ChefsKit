import React from "react";
import "../styling/entry.css";
const Entry = () => {
  const ingredients = ["chicken", "oregano", "Tomatoes"];
  const ingredientList = ingredients.map((ingredient) => <li>{ingredient}</li>);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
    console.log(ingredients);
  };

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g chicken"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientList}</ul>
    </main>
  );
};

export default Entry;

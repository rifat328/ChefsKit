import React from "react";
import "../styling/entry.css";
const Entry = () => {
  const [ingredients, setIngredient] = React.useState([]);
  const ingredientList = ingredients.map((ingredient) => (
    <li style={{ listStyleType: "none" }}>{ingredient}</li>
  ));
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
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
      <ul className="ingredient-list" aria-label="ingredient list">
        {ingredientList}
      </ul>
    </main>
  );
};

export default Entry;

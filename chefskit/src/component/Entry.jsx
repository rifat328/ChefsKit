import React from "react";
import "../styling/entry.css";
import IngredientList from "./IngredientList";
import HuggingFaceRecipe from "./HuggingFaceRecipe";
import { getRecipeFromMistral } from "../ai";
const Entry = () => {
  const [ingredients, setIngredient] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
    const fromElement = event.currentTarget;
    fromElement.reset();
    console.log("Form reset executed");
  };
  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    console.log(recipeMarkdown);
  }
  //action={handleSubmit} setRecipeShown((prevValue) => !prevValue);
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
      {ingredients.length > 0 && (
        <IngredientList getRecipe={getRecipe} ingredients={ingredients} />
      )}
      {recipe && <HuggingFaceRecipe />}
    </main>
  );
};

export default Entry;

import React from "react";

const IngredientList = (props) => {
  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient} style={{ listStyleType: "none" }}>
      {ingredient}
    </li>
  ));
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {props.ingredients.length >= 4 && (
        <div className="get-recipe-container">
          <div ref={props.ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
};

export default IngredientList;

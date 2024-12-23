import React from "react";
import ReactMarkdown from "react-markdown";
import "../styling/hugging-face-recipe.css";
const HuggingFaceRecipe = (props) => {
  console.log(typeof props.recipe);

  return (
    <section className="suggested-recipe-container">
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
};

export default HuggingFaceRecipe;

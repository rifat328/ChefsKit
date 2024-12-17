import React from "react";
import "../styling/entry.css";
const Entry = () => {
  return (
    <main>
      <form className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g chicken"
          aria-label="Add ingredient"
        />
        <button>Add ingredient</button>
      </form>
    </main>
  );
};

export default Entry;

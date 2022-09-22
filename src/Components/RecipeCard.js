import React, { useState } from "react";

export default function RecipeCard(props) {
  console.log("Recipe Card:", props.recipe);
  const { recipe } = props;
  const [like, setLike] = useState(false);
  return (
    <div
      style={{
        width: "300px",
        margin: "20px auto",
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "5px 5px, 5px",
      }}
    >
      <h3>{meals.name}</h3>
      <p>
        MEAL: {recipe.meal} | INGREDIENT: {recipe.ingredient}
      </p>
      <p>{meals.description}</p>
      {!like ? (
        <button
          onClick={() => {
            setLike(!like);
          }}
        >
          Like
        </button>
      ) : (
        <button
          onClick={() => {
            setLike(!like);
          }}
        >
          Unlike
        </button>
      )}
    </div>
  );
}
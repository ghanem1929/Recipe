import React from "react";

const Recipe = ({ title, calorie, image, ingredients }) => {
  calorie = Number(calorie.toFixed(1));
  return (
    <div className="recipe-card">
      <h1>{title}</h1>
      <h3 className="calories">calories : {calorie} </h3>
      <img className="image" src={image} alt="" />
      <div className="ingredients">
        <ul>
          {ingredients.map((ingredients) => (
            <li>
              {ingredients.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;

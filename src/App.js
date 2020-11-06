import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const App_id = "a23df74c";
  const App_key = "4ac20a88a1288ff97c4d01843c5d04f7";

  const [Recipes, setResipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`
    );
    const data = await response.json();
    setResipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="container">
        <form onSubmit={getSearch}>
          <input type="text" placeholder="Search" value={search} onChange={updateSearch} />
          <button  type="submit">Search</button>
        </form>
      <div className="recipe-cards">
        {Recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calorie={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

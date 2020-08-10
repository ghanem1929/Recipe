import React,{useEffect,useState} from 'react';
import './App.css';
import './bootstrap.min.css';
import Recipe from './Recipe';

const App = () => {
  const App_id = 'a23df74c';
  const App_key = '4ac20a88a1288ff97c4d01843c5d04f7';

  const [Recipes,setResipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes()  
  }, [query])

  
  const getRecipes = async() =>{
    const reponse = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`)
    const data = await reponse.json();
    setResipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return(
    <div>
      {/* <form onSubmit={getSearch} className="search_form">
        <input className="search_bar" 
                  type="text"
                  value={search}
                  onChange={updateSearch} />
        <button className="search_button" type="submit">search</button>
      </form>
      {Recipes.map(recipe => (
      <Recipe key ={recipe.recipe.label}
              title={recipe.recipe.label}
              calorie={recipe.recipe.calories} 
              image= {recipe.recipe.image} 
              ingredients = {recipe.recipe.ingredients} />
      ))} */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <form class="form-inline my-2 my-lg-0" onSubmit={getSearch}>
        <input class="form-control mr-sm-2" 
                type="text" 
                placeholder="Search" 
                value={search} 
                onChange={updateSearch}/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
      </nav>
      <div className="recipe">
      {Recipes.map(recipe => (
      <Recipe key ={recipe.recipe.label}
              title={recipe.recipe.label}
              calorie={recipe.recipe.calories} 
              image= {recipe.recipe.image} 
              ingredients = {recipe.recipe.ingredients} />
      ))}
</div>
    </div>
  );
}

export default App;

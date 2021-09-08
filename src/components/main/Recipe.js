import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import RecipeButton from "./RecipeButton";

export default function Recipe() {
  const recipeUrl = "http://localhost:8080/recipe/v1/random";

  const [recipe, setRecipe] = useState([]);
  const [state, setState] = useState("front");
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);


  const changeState = () => {
    setState(state === "front" ? "back" : "front");
  };

  useEffect(() => {
    axios.get(recipeUrl).then((response) => {
      setLoading(false);
      setRecipe(response.data);
      setIngredients(response.data.ingredients);
      setMeasures(response.data.measures);
    });
  }, []);

  const addIngredientsAndMeasures = () => {
    return  ingredients.map((x, i) => `${x}: ${measures[i]}`); 
  }

  const recipeFront = (
    <div>
      <h4>Today's meal:</h4>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
      <RecipeButton
        text={"See recipe"}
        callback={() => changeState()}
      ></RecipeButton>
      {addIngredientsAndMeasures().map((ingredient) => (
        <p key={ingredient}>{ingredient}</p>
      ))}
    </div>
  );

  const recipeBack = (
    <div className="FlexColumn">
      <h4>Step by step</h4>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
      <RecipeButton
        text={"See ingredients"}
        callback={() => changeState()}
      ></RecipeButton>
      <p id="recipe-description">{recipe.strInstructions}</p>
    </div>
  );

  return loading === true
    ? "Loading..."
    : state === "front"
    ? recipeFront
    : recipeBack;
}

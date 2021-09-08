import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeButton from "./RecipeButton";

export default function Recipe() {

  const MAX_DESCRIPTION_LENGTH = 550;
  const recipeUrl = "http://localhost:8080/recipe/v1/random";

  const [recipe, setRecipe] = useState([]);
  const [state, setState] = useState("front");
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState("");


  const changeState = () => {
    setState(state === "front" ? "back" : "front");
  };

  useEffect(() => {
    axios.get(recipeUrl).then((response) => {
      setLoading(false);
      setRecipe(response.data);
      setIngredients(addIngredientsAndMeasures(response.data.ingredients, response.data.measures))
      setDescription(shortenDescription(response.data.strInstructions));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addIngredientsAndMeasures = (ingredients, measures) => {
    return  ingredients.map((x, i) => `${x}: ${measures[i]}`); 
  }

  const shortenDescription = (description) => {
    if(description.length > MAX_DESCRIPTION_LENGTH){
      description = description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
    }
    return description;
  }

  const recipeFront = (
    <div>
      <h4>Today's meal:</h4>
      <h3>{recipe.strMeal}</h3>
      <a href={recipe.strSource} target="_blank" rel="noreferrer">
      <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
      </a>
      <RecipeButton
        text={"See recipe"}
        callback={() => changeState()}
      ></RecipeButton>
      {ingredients.map((ingredient) => (
        <p key={ingredient}>{ingredient}</p>
      ))}
    </div>
  );

  const recipeBack = (
    <div className="FlexColumn">
      <h4>Step by step</h4>
      <h3>{recipe.strMeal}</h3>
      <a href={recipe.strSource} target="_blank" rel="noreferrer">
      <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
      </a>
      <RecipeButton
        text={"See ingredients"}
        callback={() => changeState()}
      ></RecipeButton>
      <p id="recipe-description">{description}</p>
    </div>
  );

  return loading === true
    ? "Loading..."
    : state === "front"
    ? recipeFront
    : recipeBack;
}

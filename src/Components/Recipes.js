import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import RecipeCard from './RecipeCard';
import axios from 'axios';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=risotto`)
      .then((data) => {
        console.log(data.data.meals)
        setRecipes(data.data.meals)
      })
  }, [])

  console.log("recipes", recipes)
  if (recipes.length < 1) {
    return <h1>LOADING...</h1>
  }


  return (
    <div className="App" >
      {recipes.map((recipe) => {
        return (
          <RecipeCard recipe={recipe} />
        )
      })}
    </div>
  )
}

export default Recipes

//try to understand this...the data is coming in.. now we need the recipe card 
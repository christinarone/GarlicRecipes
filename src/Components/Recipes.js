import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import RecipeCard from './RecipeCard'
import axios from 'axios';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const [input, setInput] = useState("")

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((data) => {
        console.log(data.data.meals)
        setRecipes(data.data.meals)
      })
  }, [input])

  const handleInputChange = (e) => setInput(e.target.value)

  console.log("recipes", input)
  if (recipes.length < 1) {
    return <h1>LOADING...</h1>
  }


  return (
    <div className="App" >
      <TextField
        onChange={handleInputChange}
        value={input}
        id="outlined-basic"
        label="Search"
        variant="outlined"
      />
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
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import RecipeCard from './RecipeCard'
import axios from 'axios';

function Recipes() {
  const [myRecipes, setMyRecipes] = useState([]);

  useEffect(() => {
    const userID = localStorage.getItem("userId")
    const body = { id: userID }
    const token = localStorage.getItem("token")
    const headers = { headers: { Authorization: `Bearer ${token}` } }
    axios.get(`https://newapp12345678.herokuapp.com/recipes/`, body, headers)
      .then((data) => {
        console.log("myRecioes data", data)
        setMyRecipes(data.data.meals)
      })
  }, [])

  return (
    <div>

      {myRecipes.map((recipe) => {
        return (
          <RecipeCard recipe={recipe} />
        )
      })}
    </div>
  )
}

export default Recipes

//try to understand this...the data is coming in.. now we need the recipe card 
import { dividerClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


// import { checkAuth } from "../App"
// import { Link } from "react-dom";

export function RecipeCard(props) {
  // console.log("props right here", props);
  const [cards, setCards] = useState([]);
  const [flip, setFlip] = useState(false);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const [expanded, setExpanded] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false)
  const favoriteStyle = favorite ? "red" : "grey"
  // const favoriteStyle = favorite ? { color: "red" } : { color: "grey" }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddFavorite = async (item) => {
    console.log("clickedItem", item)
    const user_id = localStorage.getItem("userId")
    const body = { user_id, recipe_name: "", recipe_description: "" }
    try {
      await axios.post("http://localhost:3330/recipes/new-recipe", body)
    } catch (error) {
      console.error("error adding favorite", error)
    }
    setFavorite(!favorite);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.recipe.strMeal}
        foodType={props.recipe.strArea}
      // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={props.recipe.strMealThumb}
        alt={props.recipe.strCategory}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.recipe.strInstructions}

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"
          onClick={() => handleAddFavorite(props.recipe)}
          aria-expanded={favorite}
        //10-2 homework
        >
          <FavoriteIcon style={{ color: favoriteStyle }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that dont open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default RecipeCard
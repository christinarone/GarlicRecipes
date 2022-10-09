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

export function MyRecipeCard(props) {
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

  const handleRemoveFavorite = async (item) => {
    console.log("clickedItem", item)
    const token = localStorage.getItem("token")
    const user_id = localStorage.getItem("userId")
    try {
      const header = { headers: { Authorization: `Bearer ${token}` } }
      await axios.delete(`https://newapp12345678.herokuapp.com/recipes/${item.id}`, header)

    } catch (error) {
      console.error("error removing favorite", error)
    }
    // setFavorite(!favorite);
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
        title={props.recipe.recipe_name}
      // foodType={props.recipe.strArea}
      // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={props.recipe.recipe_thumbnail}
      // alt={props.recipe.strCategory}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* {props.recipe.strInstructions} */}

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"
          onClick={() => handleRemoveFavorite(props.recipe)}
          aria-expanded={favorite}
        >
          <FavoriteIcon style={{ color: "red" }} />
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
            {props.recipe.recipe_description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default MyRecipeCard
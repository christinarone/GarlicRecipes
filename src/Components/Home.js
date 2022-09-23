import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import cookie from 'cookie';
// import EntryCard from './Entrycard';


const cookies = cookie.parse(document.cookie);
const userID = parseInt(cookies.userID);

// const recipes: RecipeItem=[
//     { key: "Garlic Mashed Potatoes", value: "Garlic Mashed Potatoes" },
//     { key: "Garlic Hummus", value: "Garlic Hummus" },
//     { key: "Garlic Bread", value: "Garlic Bread" },
// ]

// Homework get recipe results from any API 9/18/22
//go to each one and try to hit an endpoint in postman
// **Find a recipe API and its endpoint, then use the endpoint in postman
//** to return --get an api key..each api is different..hit the endpoint in postman */
//apply for 25 different api keys minimum 10
class Home extends Component {
    constructor() {
        super()
        this.state = {
            arrayOfEntries: [],
            filterSelect: false,
            recipeEntries: []
        }
    };


    // componentDidMount() {
    //     axios.get(`https://christinaronefirstapp.herokuapp.com/garlicrecipes/userentries/${userID}`)
    //         .then(res => {
    //             const arrayOfEntries = res.data;
    //             this.setState({ arrayOfEntries })
    //         })
    // };


    handleChange(e) {
        console.log("recipe selected", e);
        console.log(e.key)
        const contEntries = this.state.arrayOfEntries.filter(function (entry) {
            return entry.recipes === e.key
        })

        // this.setState({ filterSelect: true, recipeEntries: recEntries });
    }


    render() {
        return (
            <Container>
                <h2 style={{ fontSize: "150%", marginLeft: "5%" }}>Filter Entries By Recipe:</h2>
                {/* <EntryCard
                    primaryColor="#699EAA"
                    secondaryColor="#FF5C5C"
                    onClickRecipe={this.handleChange.bind(this)}
                    name="recipes"
                    value={this.state.recipeEntries}
                    style={{
                        margin: "auto",
                        textAlign: "center",
                        display: "block",
                        marginTop: "2%"
                    }}
                /> */}
                <br></br>
                {
                    !this.state.filterSelect ? <Grid container spacing={8} style={{ margin: "auto" }}>
                        {this.state.arrayOfEntries.map((entry, index) => {
                            return (
                                <TextField item xs={4} key={index} id={entry.id} date={entry.date} recipe={entry.recipe} ingredient={entry.ingredient} UserID={entry.UserID} />
                            )
                        })}
                    </Grid>

                        :

                        <Grid container spacing={8} style={{ margin: "auto" }}>
                            {this.state.recipeEntries.map((entry, index) => {
                                return (
                                    <TextField item xs={4} key={index} id={entry.id} date={entry.date} recipe={entry.recipe} ingredient={entry.ingredient} UserID={entry.UserID} />
                                )
                            })}
                        </Grid>
                }
            </Container>




        );
    }
}

export default Home
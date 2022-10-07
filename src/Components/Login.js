import React, { Component, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from "axios"


function Login() {

    const navigate = useNavigate();
    const [state, setState] = useState({
        user_name: "",
        password: "",

    });
    //Homework: make pages look good, material ui login page example., focus on the front end
    const handleTextChange = (e) => setState({ ...state, [e.target.name]: e.target.value })

    //... each of state; username and pw;... can be array or obj
    const login = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("https://newapp12345678.herokuapp.com/login", state)
            console.log("hello", data)
            localStorage.setItem("userName", state.user_name)
            localStorage.setItem("userId", data.userid)
            localStorage.setItem("token", data.token)
            localStorage.setItem("loggedIn", "true")
            navigate("/recipes")
        } catch (error) {
            console.error("error loggin in", error)
        }
        // set cookie here
        // set loggedIn = true and max-age = 60*1000 (one minute)
    };
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Stack spacing={3} direction="row">
                    <TextField
                        required
                        onChange={handleTextChange}
                        //the text will change when they type
                        //all events start with "on"
                        value={state.user_name}
                        id="outlined-required"
                        name="user_name"
                        label="Username"
                        defaultValue="Username"
                    />
                    <TextField
                        required
                        onChange={handleTextChange}
                        value={state.password}
                        id="outlined-password-input"
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    //make another few textfields "login" and "signup"
                    />
                    <Button variant="contained" onClick={login}>Submit</Button>
                </Stack>
            </Box>

        </div>
    )
}

export default Login

//state, eventListener, & function
import React, { Component, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import cookie from "cookie"



function Login() {

    const navigate = useNavigate();

    const [state, setState] = useState({
        username: "",
        password: "",

    });
    //Homework: make pages look good, material ui login page example., focus on the front end
    const handleTextChange = (e) => setState({ ...state, [e.target.name]: e.target.value })

    //... each of state; username and pw;... can be array or obj
    const login = (e) => {
        e.preventDefault();
        // set cookie here
        document.cookie = cookie.serialize("loggedIn", "true")
        // set loggedIn = true and max-age = 60*1000 (one minute)

        navigate("/");
    };
    console.log("state",);
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
                        value={state.username}
                        id="outlined-required"
                        name="username"
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
                    />
                    <Button variant="contained" onClick={login}>Submit</Button>
                </Stack>
            </Box>

        </div>
    )
}

export default Login

//state, eventListener, & function
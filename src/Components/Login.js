import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Login() {
    const [state, setState] = useState({
        username: "",
        password: "",
    });

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    console.log("state", state);
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
                <Stack spacing={2} direction="row">
                    <TextField
                        required
                        onChange={handleTextChange}
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
                    <Button variant="contained">Submit</Button>
                </Stack>
            </Box>

        </div>
    )
}

export default Login
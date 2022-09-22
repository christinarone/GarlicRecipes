// import React, { Component } from 'react';
// import axios from 'axios';
// // import './Navbar.css';
// import Input from '@mui/material/Input';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// const Label = { 'label': 'description' };


// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       email: "",
//       password: ""
//     }
//   }

//   handleChange = (e) => {
//     console.log(e.target.name)
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }

//   // handleSubmit = (e) => {
//   //   e.preventDefault()
//   // axios.post('http://localhost:8000/register', {
//   //   email: this.state.email,
//   //   password: this.state.password
//   // })

//   handleSubmit = (e) => {
//     e.preventDefault()
//     axios.post('https://christinaronefirstapp.herokuapp.com/register', {
//       email: this.state.email,
//       password: this.state.password
//     })
//       .then(function (response) {
//         console.log(response)
//         //when this response comes back , we need to store bearer token in cookies
//       })
//       .catch(function (error) {
//         console.log(error)
//       })
//     this.setState({
//       email: "",
//       password: ""
//     })
//   }

//   render() {
//     return (
//       <div style={{
//         margin: 'auto',
//         textAlign: 'center'
//       }}>
//         <h2 sx={{ color: '#FF5C5C' }}>Register Account</h2>
//         <form onSubmit={(e) => { this.handleSubmit(e) }}>
//           <Input sx={{ width: '30%' }} placeholder="Email" name="email" type="text" value={this.state.email} onChange={(e) => { this.handleChange(e) }} />
//           <br />
//           <TextField
//             sx={{ width: '30%', margin: '3%' }}
//             id="filled-password-input"
//             label="Password"
//             type="password"
//             autoComplete="current-password"
//             variant="filled"
//             name="password" value={this.state.password} onChange={(e) => { this.handleChange(e) }}
//           /><br></br>

//           <br />
//           <Button variant="outlined" type="submit" value="Submit" sx={{ margin: '3%', color: "#FF5C5C " }}>Register</Button>
//         </form>
//       </div>
//     )
//   }
// }

// export default App;
import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

export default function Login(props) {
    console.log(props)
    const { setLoggedIn } = props
    const handleSubmit = (e) => {
        console.log(e)
        setLoggedIn(true)
    }
    return (
        <div>
            <Typography variant="h6" gutterBottom mt={10}>
                Login Screen
            </Typography>

            <Stack spacing={2} width={300} margin="auto" component={"form"} onSubmit={(e) => { handleSubmit(e) }}>

                <TextField id="username" label="Email" variant="outlined" />
                <TextField
                    id="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                />
                <Button type='submit' variant="contained" style={{ marginTop: 15 }}>Submit</Button>
            </Stack>
        </div>
    );
}

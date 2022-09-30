import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import cookie from "cookie";
// import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky"
    >
      <Toolbar style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'cream'
      }}>
        <h1 style={{ color: "gold" }}><Link to="/recipes">MyRecipes</Link></h1>
        <h1 style={{ color: "green" }}><Link to="/about">Login</Link></h1>
        <h1 style={{ color: "purple " }}><Link to="/Upload">Upload</Link></h1>
        <h1 style={{ color: "pink" }} onClick={() => {
          document.cookie = cookie.serialize("loggedIn", null, {
            maxAge: 0,
          });
          document.cookie = cookie.serialize("jwt", null, {
            maxAge: 0
          });
          document.cookie = cookie.serialize("userID", null, {
            maxAge: 0
          });
          navigate("/Login");
        }}
        >Logout</h1>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
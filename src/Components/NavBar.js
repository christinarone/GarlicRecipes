import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import cookie from "cookie";
// import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("loggedIn")
  return (
    <AppBar position="sticky"
    >
      <Toolbar style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'off-white'
      }}>
        <h1 style={{ color: "#00d4ff" }}><Link to="/search">Search</Link></h1>
        <h1 style={{ color: "#00d4ff" }}><Link to="/recipes">MyRecipes</Link></h1>
        <h1 style={{ color: "#00d4ff" }} onClick={() => {
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
        >Upload</h1>
        {!loggedIn ? (<h1 style={{ color: "#00d4ff" }}><Link to="/login">Login</Link></h1>) :
          null}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
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
        backgroundColor: 'off-white'
      }}>
        <h1 style={{ color: "#00d4ff" }}><Link to="/recipes">Search</Link></h1>
        <h1 style={{ color: "#00d4ff" }}><Link to="/login">Login</Link></h1>
        <h1 style={{ color: "#00d4ff" }}><Link to="/logout">Logout</Link></h1>
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
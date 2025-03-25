import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const [user, setUser] = useState();
  console.log("user from loal storage: ", user);
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
    }
  });

  function handleLogout(){
    console.log("logout clicked")
    dispatch(logoutUser())
  }
  return (
    <AppBar position="relative" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TaskFlow 
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to="/create">
            Create
          </Button>
          <Button color="inherit" component={Link} to="/view">
            View
          </Button>
        </Box>
        <Box>
          {user ? (
            <Box>
              <Button onClick={handleLogout} color="inherit">
                Logout
              </Button>
            </Box>
          ) : (
            <Box>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

import React from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../../redux/authSlice.js";
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const onSubmit = (data) => {
    const credentials = {
      email : data.email,
      password : data.password
    }
    dispatch(loginUser(credentials))
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Email"
            {...register("email", { required: "Email is required" })}
            variant="outlined"
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
            variant="outlined"
            margin="normal"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#1976d2" }}
            >
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTaskAsync } from "../redux/taskSlice";

export const TaskInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch()
  const onSubmit = (data) => {
    const newTask = {
      Name: data.Name,
      priority: data.Priority,
    };
    dispatch(addTaskAsync(newTask));
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: 400, mx: "auto", mt: 10 }}
    >
      <TextField
        fullWidth
        label="Name"
        {...register("Name", { required: "Name is required" })}
        variant="outlined"
        margin="normal"
        error={!!errors.Name}
        helperText={errors.Name?.message}
      />
      <TextField
        fullWidth
        label="Priority"
        type="text"
        {...register("Priority", { required: "Priority is required" })}
        variant="outlined"
        margin="normal"
        error={!!errors.Priority}
        helperText={errors.Priority?.message}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Create Task
      </Button>
    </Box>
  );
};

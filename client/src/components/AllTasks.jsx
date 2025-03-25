import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { deleteTasks, fetchTasks } from "../redux/taskSlice";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
export const AllTasks = () => {
  let { tasks, loading, error } = useSelector((store) => store.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Task List
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : tasks.length === 0 ? (
          <Typography>No tasks available. Add some tasks!</Typography>
        ) : (
          <List>
            {tasks.map((task) => (
              <ListItem key={task._id} sx={{ borderBottom: "1px solid #ddd" }}>
                <ListItemText
                  primary={task.Name}
                  secondary={`Priority: ${task.priority}`}
                />
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => dispatch(deleteTasks(task._id))}
                >
                  Delete
                </Button>
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </>
  );
};

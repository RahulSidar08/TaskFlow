import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// Async thunk to fetch tasks
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (_,{rejectWithValue}) => {
  try {
    const response = await axios.get(" https://taskflow-xzmc.onrender.com/task/viewAll");
    console.log(response.data)
    if (!response.data || response.data.length === 0) {
      return [];
    }
    return response.data.tasks;
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong")
    return rejectWithValue(error.response?.data?.message || "Something went wrong");
  }
});

export const deleteTasks = createAsyncThunk("tasks/deleteTasks", async (taskId,{rejectWithValue}) => {
  try {
    const response = await axios.post(
      ` https://taskflow-xzmc.onrender.com/task/delete/${taskId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    toast.success("Task deleted Successfully");
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong")
    return rejectWithValue(error.response?.data ?.message|| "Something went wrong");
  }
});

export const addTaskAsync = createAsyncThunk(
  "tasks/addTaskAsync",
  async (taskData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        " https://taskflow-xzmc.onrender.com/task/create",
        taskData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Task Created Successfully");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong")
      return rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [], loading: false, error: null },
  reducers: {
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.tasks = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch tasks";
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        if (!Array.isArray(state.tasks)) {
          state.tasks = [];
        }
        state.tasks.push(action.payload);
      })
      .addCase(addTaskAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { deleteTask } = taskSlice.actions;
export default taskSlice.reducer;

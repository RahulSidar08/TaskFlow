import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch tasks
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (_,{rejectWithValue}) => {
  try {
    const response = await axios.get("http://localhost:3000/task/viewAll");
    console.log(response.data)
    if (!response.data || response.data.length === 0) {
      return [];
    }
    return response.data.tasks;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Something went wrong");
  }
});

export const deleteTasks = createAsyncThunk("tasks/deleteTasks", async (taskId,{rejectWithValue}) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/task/delete/${taskId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data ?.message|| "Something went wrong");
  }
});

export const addTaskAsync = createAsyncThunk(
  "tasks/addTaskAsync",
  async (taskData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/task/create",
        taskData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
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

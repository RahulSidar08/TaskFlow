import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true, // Removes leading/trailing spaces
    },
    priority: {
      type: String,
      required: true,
      enum: ["High", "Medium", "Low"], // Restricts to these values
    },
  },
  {
    timestamps: true, // Adds createdAt & updatedAt fields
  }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;

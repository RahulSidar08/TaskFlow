import Task from "../models/taskModel.js";

export const createTask = async (req, res) => {
  try {
    let {Name, priority } = req.body;
    console.log(Name,priority)
    if (!Name || !priority) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    let existingTask = await Task.findOne({ Name });

    if (existingTask) {
      return res.status(400).json({
        message: "Task Already Exist",
        success: false,
      });
    }

    let newTask = await Task.create({
      Name,
      priority,
    });
    return res.status(200).json({
      success: true,
      message: "Task created SUccessfully",
      newTask,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      Error: error,
    });
  }
};

export const viewTask = async (req, res) => {
    try {
      let { id } = req.params;
      
      // Correct way to find by ID
      let task = await Task.findById(id);
  
      if (!task) {
        return res.status(404).json({
          message: "Task does not exist",
          success: false,
        });
      }
  
      return res.status(200).json({
        success: true,
        message: "Task fetched successfully",
        task,
      });
    } catch (error) {
      console.error("Error fetching task:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message,
      });
    }
  };  

export const viewAllTask = async (req, res) => {
    try {
      let tasks = await Task.find();
      if (tasks.length === 0) {
        return res.status(400).json({
          message: "Task does not Exist",
          success: true,
        });
      }
  
      return res.status(200).json({
        success: true,
        message: "Task Fetched SUccessfully",
        tasks,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
        Error: error,
      });
    }
  };

export const deleteTask = async (req, res) => {
  try {
    let { id } = req.params;
    let task = await Task.findById(id);
    if (!task) {
      return res.status(400).json({
        message: "Task does not Exist",
        success: false,
      });
    }

    await Task.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Task deleted SUccessfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      Error: error,
    });
  }
};

## TaskFlow 📝🚀
TaskFlow is a simple and efficient task management web application designed to help users organize their daily tasks effortlessly. With features like task creation, prioritization, and deletion, TaskFlow ensures a smooth and productive workflow. The application utilizes Redux Thunk for handling asynchronous operations, such as fetching and updating tasks from an API, ensuring a seamless user experience with efficient state management.


## Features

- User Authentication – Secure login and registration system
- Task Management – Create, view, and delete tasks easily
- Task Prioritization – Set priority levels for better organization
- Responsive UI – Optimized for all devices
- Redux Toolkit Integration – Efficient state management
- Redux Thunk - Redux Thunk is used in this project to handle asynchronous API calls efficiently.
- Fetching Tasks – fetchTasks asynchronously retrieves all tasks from the backend and updates the Redux store.
- Adding Tasks – addTaskAsync sends a new task to the backend and updates the state only when the request succeeds.
- Deleting Tasks – deleteTasks removes a task from the database and then updates the frontend store accordingly.

## Tech Stack

**Client:** React, Redux-thunk, Material UI

**Server:** Node, Express

**Database:** MongoDB



## Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/RahulSidar08/TaskFlow.git
```
## Run Locally

```bash
npm install  
npm run dev
```
🌐 Live Demo

```bash
 https://taskflow-xzmc.onrender.com
```

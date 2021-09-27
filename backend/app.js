const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
require("./src/db/mongoose");

const app = express();

const usersRoute = require("./src/routers/users.router");
const tasksRoute = require("./src/routers/tasks.router");

const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/v1/users", usersRoute);
app.use("/api/v1/tasks", tasksRoute);

app.listen(port, (req, res) => {
	console.log("Backend running on port " + port);
});

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var addRouter = require("./routes/addtasks");
var displayRouter = require("./routes/display");
var removeRouter = require("./routes/removetasks");
var completedRouter = require("./routes/completedtasks");
var getTaskRouter = require("./routes/gettask");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Express Routing
app.use("/view-tasks", displayRouter);
app.use("/add-task", addRouter);
app.use("/remove-task", removeRouter);
app.use("/completed-task", completedRouter);
app.use("/get-task", getTaskRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;

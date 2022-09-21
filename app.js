const express = require("express");
const cors = require("cors");

// const setupContactRouter = require("./app/routes/contact.route");

const { BadRequestError, errorHandler } = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcom to contact book application" });

});

// setupContactRouter(app);

app.use((req, res, next) => {
    next(new BadRequestError(404, "Resource not found"));
});

app.use((error, req, res, next) => {
    errorHandler.handleError(error, res);
});

module.exports = app;
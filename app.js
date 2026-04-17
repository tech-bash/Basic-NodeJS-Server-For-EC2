const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

app.get("/", (req, res) => {
    console.log("App is up and running...");
    res.json({ status: "App is running" });
});

app.get("/health", (req, res) => {
    console.log("Health check hit");
    res.json({ status: "ok" });
});

app.get("/hello", (req, res) => {
    console.log("Hello endpoint hit 1");
    console.log(`IP : ${req.headers["x-forwarded-for"] || req.socket.remoteAddress}`);
    res.json({ message: "Hello, World!" });
});

app.listen(PORT, () => {
    console.log(`------- Server running on port ${PORT} ---------`);
});

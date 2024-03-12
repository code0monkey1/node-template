import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("working");
});

export default app;

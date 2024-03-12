import express, { NextFunction, Request, Response } from "express";
import logger from "./config/logger";
import { HttpError } from "http-errors";
const app = express();
import "express-async-errors";

app.get("/data", (req, res) => {
    res.json({ data: "working" });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(error.message);
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({
        errors: [
            {
                type: error.message,
                path: "",
                location: "",
            },
        ],
    });
});

export default app;

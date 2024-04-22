import express, { NextFunction, Request, Response } from "express";
class LoggerMiddleware {

    public logToConsole(request: Request, response: Response, next: NextFunction): void {

        console.log("Method: ", request.method);
        console.log("Route: ", request.originalUrl);
        console.log("Body: ", request.body);

        // continue to next middleware or route:
        next();

    }
}
export const loggerMiddleware = new LoggerMiddleware();
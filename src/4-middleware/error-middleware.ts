import express, { NextFunction, Request, Response } from "express";
import { statusCode } from "../3-models/enums";
import { RouteNotFoundError } from "../3-models/client-error";
class ErrorMiddleware {

    public routeNotFound(request: Request, response: Response, next: NextFunction): void {

        const err = new RouteNotFoundError(request.originalUrl);

        // go to catch all:
        next(err);

    }


    public cathAll(err: any, request: Request, response: Response, next: NextFunction): void {
        // log error:
        console.log(err);

        const message = err.message;
        const status = err.status || statusCode.internalServerError;

        // response the error:
        response.status(status).send(message);

        // continue to next middleware or route:
        next();

    }
}
export const errorMiddleware = new ErrorMiddleware();
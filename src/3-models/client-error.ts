import { statusCode } from "./enums";

abstract class ClientError {
    public message: string;
    public status: number;

    public constructor(message: string, status: number) {
        this.message = message;
        this.status = status

    }
}

// route not found error:

export class RouteNotFoundError extends ClientError {
    public constructor(route: string) {
        super(`route ${route} not found.`, statusCode.notFound)
    }
}

// resource not found:
export class ResourceNotFoundError extends ClientError {
    public constructor(id: number) {
        super(`id ${id} not found.`, statusCode.notFound)
    }
}

// validation error:
export class ValidationError extends ClientError {
    public constructor(message: string) {
        super(message, statusCode.badRequest)
    }
}

// unauthorize error:
export class UnauthorizeError extends ClientError {
    public constructor(message: string) {
        super(message, statusCode.unauthorized)
    }
}


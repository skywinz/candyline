export interface ResponseInterface {
    statusCode: number;
}

export interface ErrorResponse extends ResponseInterface {
    errorMessage?: string;
}
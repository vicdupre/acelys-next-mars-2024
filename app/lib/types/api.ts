export type ApiResponse<T> = ApiErrorResonse | ApiSuccessResponse<T>;
export interface ApiErrorResonse {
  status: HTTPStatus;
  error: ApiError;
  data: never;
}
export interface ApiSuccessResponse<T> {
  status: HTTPError;
  data: T;
  error: never;
}

export interface ApiError {
  message: string;
  stack?: string[];
}

export type HTTPSuccess = 200 | 201 | 202 | 204;
export type HTTPError = 400 | 401 | 403 | 404 | 500;
export type HTTPStatus = HTTPSuccess | HTTPError;

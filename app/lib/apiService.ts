import { ApiResponse, HTTPError } from "./types/api";

export const fetchApi = async <T>(
  uri: string,
  options: RequestInit = { cache: "no-store" }
): Promise<ApiResponse<T>> => {
  const response = await fetch(
    `${process.env.PROJECT_URL}/api/${uri}`,
    options
  );
  if (!response.ok) {
    return {
      error: { message: response.statusText },
      status: response.status as HTTPError,
    } as ApiResponse<T>;
  }
  console.log("response", response.status, response.ok);
  const data = await response.json();
  console.log("fetchApi", data);
  return data as ApiResponse<T>;
};

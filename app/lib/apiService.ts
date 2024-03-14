import { ApiResponse } from "./types/api";

export const fetchApi = async <T>(
  uri: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  const response = await fetch(
    `${process.env.PROJECT_URL}/api/${uri}`,
    options
  );
  const data = await response.json();
  return data as ApiResponse<T>;
};

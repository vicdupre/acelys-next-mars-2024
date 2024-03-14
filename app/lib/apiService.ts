import { ApiResponse } from "./types/api";

export const fetchApi = async <T>(
  uri: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  console.log(`${process.env.PROJECT_URL}/api/${uri}`);
  const response = await fetch(
    `${process.env.PROJECT_URL}/api/${uri}`,
    options
  );
  const data = await response.json();
  console.log("fetchApi", data);
  return data as ApiResponse<T>;
};

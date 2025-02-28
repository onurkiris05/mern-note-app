import * as Err from "../errors/http_errors";

export async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);

  if (response.ok) {
    return response;
  }

  const errorBody = await response.json();
  const errorMessage = errorBody.error;

  switch (response.status) {
    case 401:
      throw new Err.UnauthorizedError(errorMessage);
    case 409:
      throw new Err.ConflictError(errorMessage);
    default:
      throw new Error(`Request failed with status: ${response.status}. Message: ${errorMessage}`);
  }
}

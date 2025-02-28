import * as Err from "../errors/http_errors";

export async function fetchData(input: RequestInfo, init?: RequestInit) {
  const options: RequestInit = {
    credentials: "include",
    ...init,
  };
  console.log("Fetch Request:", `${process.env.REACT_APP_BACKEND_URL}${input}`);
  console.log("Fetch Options:", options);

  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}` + input, options);

  console.log("Fetch Response:", response);
  console.log("Response Headers:", response.headers);

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

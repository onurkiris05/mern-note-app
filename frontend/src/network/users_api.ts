import { UserModel } from "../models/user";

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);

  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw Error(errorMessage);
  }
}

export async function getLoggedInUser(): Promise<UserModel> {
  const response = await fetchData("/api/users", { method: "GET" });
  return response.json();
}

export interface SignUpBody {
  username: string;
  email: string;
  password: string;
}

export async function signUp(input: SignUpBody): Promise<UserModel> {
  const response = await fetchData("/api/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  return response.json();
}

export interface LoginBody {
  username: string;
  password: string;
}

export async function login(input: LoginBody): Promise<UserModel> {
  const response = await fetchData("/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  return response.json();
}

export async function logout() {
  await fetchData("/api/users/logout", { method: "POST" });
}

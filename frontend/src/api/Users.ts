import { LoginUnserType, RegisterUserType } from "../types/User";
import { Get, getApiUrl, Post } from "./FetchApi";

export async function LoginUser(userData: LoginUnserType) {
  const queryParams = new URLSearchParams(userData as any);

  const url = `${getApiUrl()}/users?`;
  const uri = url + queryParams.toString();

  return await Get(uri);
}

export async function RegisterUser(user: RegisterUserType) {
  const url = `${getApiUrl()}/users`;

  return await Post<RegisterUserType>(url, user);
}

export async function AuthTest(token: string){
  const url = `${getApiUrl()}/users/test`

  return await Get(url, token);
}

import { User } from "@auth0/auth0-react";
import { Get, getApiUrl, Post } from "./FetchApi";

export async function GetUser(token: string) {
  const url = `${getApiUrl()}/users`;

  return await Get(url, token);
}

export async function CreateUser(token: string, user: User ) {
  const url = `${getApiUrl()}/users`;
  return await Post(
    url,
    user,
    token
  );
}

export async function AuthTest(token: string) {
  const url = `${getApiUrl()}/users/test`;

  return await Get(url, token);
}

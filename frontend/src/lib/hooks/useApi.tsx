import { useAuth0 } from "@auth0/auth0-react";
import { CreateUser, GetUser } from "../../api/UsersApi";

export default function useApi() {
  const { getAccessTokenSilently } = useAuth0();

  function tokenWrapper(
    func: (token: string, body: object) => Promise<Response>
  ) {
    return async (body?: object) => {
      const token = await getAccessTokenSilently();
      return func(token, body!);
    };
  }

  return {
    getUser: tokenWrapper(GetUser),
    createUser: tokenWrapper(CreateUser),
  };
}

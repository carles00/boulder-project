import { CreateUser, GetUser } from "../../api/UsersApi";

export default function useApi() {

  function tokenWrapper(
    func: (token: string, body: object) => Promise<Response>
  ) {
    return async (body?: object) => {
      
    };
  }

  return {
    getUser: tokenWrapper(GetUser),
    createUser: tokenWrapper(CreateUser),
  };
}

import { useQuery } from "@tanstack/react-query";
import { authClient } from "../authClient";


export async function getUser(email: string, password: string){
  return await authClient.signIn.email({
    email: email,
    password: password
  })
}

export function useLoginUser(email: string, password: string){
  return useQuery({
    queryKey: ['user', email, password],
    queryFn: () => getUser(email, password),
  })
}
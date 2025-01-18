import { Route } from "./route";

export interface User {
  sub: string, 
  email: string,
  username: string,
  description?: string,
  uploadedRoutes: Route[],
  followedBy: User[],
  following: User[],
}

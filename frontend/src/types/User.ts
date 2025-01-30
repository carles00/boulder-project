export interface User{
  id: number,
  sub: string, 
  email: string,
  username: string,
  completedSetup: boolean,
  description?: string,
  picture?: string,
  //uploadedRoutes: Route[],
  //followedBy: User[],
  //following: User[],
}


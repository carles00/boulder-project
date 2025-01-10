export interface User {
  id: number;
  email: string;
  username: string;
  name: string | null;
  picture: string | null;
  description: string | null;
  gymId: number | null;
}

export interface UserWithPassword extends User{
  password: string;
}

export type RequestUser = Omit<User, "password">
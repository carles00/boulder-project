export interface User{
  description: string
  email: string
  gymId: number
  id: number
  name?: string
  password: string
  picture: string
  username: string
}

export interface LoginUnserType{
  user: string,
  password: string
}

export interface RegisterUserType{
  email: string,
  password: string,
  username: string,
}
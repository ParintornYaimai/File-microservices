export interface LoginDTO {
  email: string
  password: string
}
export interface LoginResponseDTO {
  accessToken: string;
  refreshToken: string;
  user:{
    id: string,
    role: "user" | "admin"
    firstname: string
    lastname: string
  }
}


export interface RegisterDTO {
  firstName: string
  lastName: string
  email: string
  password: string
}
export interface RegisterResponseDTO {
  jwtToken: string,
  user:{
    id: string,
    role: "user" | "admin"
    firstname: string
    lastname: string
  }
}
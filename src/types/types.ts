  // create User
  export interface TUser {
    user_id: number;
    username: string;
    email: string;
    password: string;
    role: string;
    image_url: string;
}

  // Login User
  export interface Luser {
      username: string;
      password: string;
      role: string;
      token: string; 
     }

  // Login Response
  export interface LoginResponse {
        username: string;
        role: string;
        password: string;    
    }

export interface UserAuthenticatedState {
    user:{
        user_id: number
        username: string
        email: string
        role: string
        image_url: string
    } | null
    token: string | null
    isAuthenticated: boolean
    loading: boolean
    error: string | null
  }

  export interface UserState {
    user: TUser | null;
    loading: boolean;
    error: string | null;
  }
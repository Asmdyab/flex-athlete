export interface User {
  id: string;
  userName: string;
  email: string;
  roles: string[];
}

export interface LoginRequest {
  userNameOrEmail: string;
  password: string;
}

export interface ApiResponse<T> {
  isSuccess: boolean;
  operationType: string;
  message: string;
  data: T;
  statusCode?: number;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

import { LoginRequest, ApiResponse, User } from '@/types/auth';

const API_URL = 'http://localhost:5208/api';
const TOKEN_KEY = 'auth_token';

export const authService = {
  async login(credentials: LoginRequest): Promise<ApiResponse<string>> {
    const response = await fetch(`${API_URL}/Auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
      credentials: 'include',
    });

    const data: ApiResponse<string> = await response.json();

    if (data.isSuccess && data.data) {
      localStorage.setItem(TOKEN_KEY, data.data);
    }

    return data;
  },

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const payload = this.decodeToken(token);
      const exp = (payload.exp as number) * 1000;
      return Date.now() < exp;
    } catch {
      return false;
    }
  },

  decodeToken(token: string): Record<string, unknown> {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  },

  getCurrentUser(): User | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = this.decodeToken(token);
      return {
        id: (payload['nameid'] as string) || (payload['sub'] as string) || '',
        userName: (payload['unique_name'] as string) || (payload['name'] as string) || '',
        email: (payload['email'] as string) || '',
        roles: Array.isArray(payload['role'])
          ? (payload['role'] as string[])
          : payload['role']
            ? [payload['role'] as string]
            : [],
      };
    } catch {
      return null;
    }
  },
};

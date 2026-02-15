import { ApiResponse } from '@/types/auth';
import { Employee, CreateEmployeeRequest, UpdateEmployeeRequest, Branch, Nationality } from '@/types/employee';
import { authService } from './authService';

const API_URL = 'http://localhost:5208/api';

const getHeaders = () => {
  const token = authService.getToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const employeeService = {
  async getAll(): Promise<ApiResponse<Employee[]>> {
    const response = await fetch(`${API_URL}/Emplopyee/get-all`, {
      method: 'GET',
      headers: getHeaders(),
      credentials: 'include',
    });
    return response.json();
  },

  async getById(id: number): Promise<ApiResponse<Employee>> {
    const response = await fetch(`${API_URL}/Emplopyee/get/${id}`, {
      method: 'GET',
      headers: getHeaders(),
      credentials: 'include',
    });
    return response.json();
  },

  async create(data: CreateEmployeeRequest): Promise<ApiResponse<number>> {
    const payload = {
      ...data,
      nationality: Nationality[data.nationality],
    };
    const response = await fetch(`${API_URL}/Emplopyee/create`, {
      method: 'POST',
      headers: getHeaders(),
      credentials: 'include',
      body: JSON.stringify(payload),
    });
    return response.json();
  },

  async update(data: UpdateEmployeeRequest): Promise<ApiResponse<Employee>> {
    const response = await fetch(`${API_URL}/Emplopyee/update`, {
      method: 'PUT',
      headers: getHeaders(),
      credentials: 'include',
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async delete(id: number): Promise<ApiResponse<boolean>> {
    const response = await fetch(`${API_URL}/Emplopyee/delete?id=${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
      credentials: 'include',
    });
    return response.json();
  },

  async getAllBranches(): Promise<ApiResponse<Branch[]>> {
    const response = await fetch(`${API_URL}/Branch/get-all`, {
      method: 'GET',
      headers: getHeaders(),
      credentials: 'include',
    });
    return response.json();
  },
};

import { ApiService } from '@/constants/api-service';
import type { ITask } from '@/interfaces/task';

function getAuthHeader(): HeadersInit {
  const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export const taskService = {
  getTasks: async (params?: Record<string, string>): Promise<ITask[]> => {
    const url = new URL(`${ApiService.api}/api/v1/tasks`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
    }

    const res = await fetch(url.toString(), {
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch tasks');
    }

    return data.data;
  },
};

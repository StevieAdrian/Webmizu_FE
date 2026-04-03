import { ApiService } from '@/constants/api-service';
import type { ITechnicianItem } from '@/interfaces/technician';

function getAuthHeader(): HeadersInit {
  const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export const technicianService = {
  getTechnicians: async (): Promise<ITechnicianItem[]> => {
    const res = await fetch(`${ApiService.api}/api/v1/technicians`, {
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch technicians');
    }

    return data.data;
  },

  getTechnicianById: async (id: string): Promise<ITechnicianItem> => {
    const res = await fetch(`${ApiService.api}/api/v1/technicians/${id}`, {
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch technician');
    }

    return data.data;
  },
};

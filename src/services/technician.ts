import { ApiService } from '@/constants/api-service';
import { fetchWithAuthRetry } from '@/services/auth-fetch';
import type { ITechnicianItem } from '@/interfaces/technician';

export const technicianService = {
  getTechnicians: async (): Promise<ITechnicianItem[]> => {
    const res = await fetchWithAuthRetry(`${ApiService.api}/api/v1/technicians`, {
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch technicians');
    }

    return data.data;
  },

  getTechnicianById: async (id: string): Promise<ITechnicianItem> => {
    const res = await fetchWithAuthRetry(`${ApiService.api}/api/v1/technicians/${id}`, {
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch technician');
    }

    return data.data;
  },
};

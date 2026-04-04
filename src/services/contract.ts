import { ApiService } from '@/constants/api-service';
import { fetchWithAuthRetry } from '@/services/auth-fetch';
import type { IContract, IContractFilters } from '@/interfaces/contract';

export const contractService = {
  getContracts: async (filters?: IContractFilters): Promise<IContract[]> => {
    const url = new URL(`${ApiService.api}/api/v1/contracts`);

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) url.searchParams.set(key, value);
      });
    }

    const res = await fetchWithAuthRetry(url.toString(), {
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch contracts');
    }

    return data.data;
  },
};

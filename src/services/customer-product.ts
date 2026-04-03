import { ApiService } from '@/constants/api-service';
import { fetchWithAuthRetry } from '@/services/auth-fetch';
import type { ICustomerProduct, ICustomerProductFilters } from '@/interfaces/customer-product';

export const customerProductService = {
  getCustomerProducts: async (filters?: ICustomerProductFilters): Promise<ICustomerProduct[]> => {
    const url = new URL(`${ApiService.api}/api/v1/customer-products`);

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) url.searchParams.set(key, value);
      });
    }

    const res = await fetchWithAuthRetry(url.toString(), {
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch customer products');
    }

    return data.data;
  },
};

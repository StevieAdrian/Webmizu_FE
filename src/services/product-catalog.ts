import { ApiService } from '@/constants/api-service';
import { fetchWithAuthRetry } from '@/services/auth-fetch';
import type { IProductCatalog, IProductCatalogFilters } from '@/interfaces/product-catalog';

export const productCatalogService = {
  getProductCatalogs: async (filters?: IProductCatalogFilters): Promise<IProductCatalog[]> => {
    const url = new URL(`${ApiService.api}/api/v1/product-catalog`);

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
      throw new Error(data.message || 'Failed to fetch product catalog');
    }

    return data.data;
  },
};

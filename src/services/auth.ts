import { ApiService } from '@/constants/api-service';
import type { ILoginPayload, ILoginResponse } from '@/interfaces';

export const authService = {
  login: async (payload: ILoginPayload): Promise<ILoginResponse> => {
    const res = await fetch(`${ApiService.api}/api/v1/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Login failed');
    }

    return data;
  },
};

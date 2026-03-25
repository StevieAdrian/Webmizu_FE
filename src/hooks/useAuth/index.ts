import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { authService } from '@/services/auth';
import type { ILoginPayload, ILoginResponse } from '@/interfaces';

export function useLogin() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation<ILoginResponse, Error, ILoginPayload>({
    mutationFn: (payload) => authService.login(payload),
    onSuccess: (data) => {
      const { session } = data.data;
      localStorage.setItem('access_token', session.access_token);
      localStorage.setItem('refresh_token', session.refresh_token);

      enqueueSnackbar('Login successful', { variant: 'success' });
      router.push('/');
    },
    onError: (error) => {
      enqueueSnackbar(error.message || 'Login failed', { variant: 'error' });
    },
  });
}

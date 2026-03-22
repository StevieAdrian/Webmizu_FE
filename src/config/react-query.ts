import { QueryClient } from '@tanstack/react-query';

const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
        networkMode: 'offlineFirst',
        retry: 3,
      },
    },
  });

export default getQueryClient;

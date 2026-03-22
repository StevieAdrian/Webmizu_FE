import type { PRIVILEGE_KEYS } from '../constants/privilege';

export type Route = {
  key: string;
  title: string;
  description?: string;
  path?: string;
  privilege: PRIVILEGE_KEYS[] | null;
  subRoutes?: Route[];
  noLayout?: boolean;
};

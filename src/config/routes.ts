import type { PRIVILEGE_KEYS } from '../constants/privilege';
import type { Route } from '../types/route';

const setRoute = (path: string, title: string, access: PRIVILEGE_KEYS[] | null = []): Route => {
  const key = path.replace(/\//g, '-').replace(/^-/, '') || 'home';
  return {
    key: `route-${key}`,
    title,
    description: title,
    privilege: access,
    path,
  };
};

export const publicRoutes: Route[] = [
  { ...setRoute('/login', 'Login'), noLayout: true },
];

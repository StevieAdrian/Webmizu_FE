export const PRIVILEGES = Object.freeze({
  'Review_Review': '',
  'Review_Read': '',
});

export type PRIVILEGE_KEYS = keyof typeof PRIVILEGES;
export const ALL_PRIVILEGES = Object.values(PRIVILEGES);

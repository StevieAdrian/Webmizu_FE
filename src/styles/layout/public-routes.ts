import type { SxStyle } from '../../types/style';

export const publicLayoutStyles: Record<string, SxStyle> = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
  },
  backdrop: {
    zIndex: 1,
  },
};

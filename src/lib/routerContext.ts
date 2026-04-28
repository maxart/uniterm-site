import { createContext } from 'react';

export interface RouterValue {
  path: string;
  navigate: (
    to: string,
    options?: { replace?: boolean; scroll?: boolean },
  ) => void;
}

export const RouterContext = createContext<RouterValue | null>(null);

'use client';
import React, { createContext, useContext, useMemo } from 'react';

import { CustomComponents } from './types';

const context = createContext({} as any);

interface NotionProviderProps {
  components: CustomComponents;
}

export const NotionRenderProvider: React.FC<React.PropsWithChildren<NotionProviderProps>> = ({
  components,
  children,
}) => {
  const value = useMemo(() => components, []);

  return <context.Provider value={value}>{children}</context.Provider>;
};

export const useNotionRender = () => useContext(context);

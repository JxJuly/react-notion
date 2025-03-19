'use client';
import React, { createContext, useContext, useMemo } from 'react';

const context = createContext({} as any);

interface NotionProviderProps {
  components: Record<string, any>;
}

export const NotionRenderProvider: React.FC<React.PropsWithChildren<NotionProviderProps>> = ({
  components,
  children,
}) => {
  const value = useMemo(() => components, []);

  return <context.Provider value={value}>{children}</context.Provider>;
};

export const useNotionRender = () => useContext(context);

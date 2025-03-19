'use client';

import React from 'react';

import { useNotionRender } from './provider';

interface RenderProps {
  data: any[];
}

const Render: React.FC<RenderProps> = ({ data }) => {
  const components = useNotionRender();
  return (
    <>
      {data.map((block) => {
        const children = block.has_children ? <Render data={block.children} /> : undefined;
        const Comp = components[block.type] ?? React.Fragment;

        return <Comp key={block.id} block={block} children={children} />;
      })}
    </>
  );
};

export { Render };

import React from 'react';

import { Render } from './render';
import { serialize } from './serialize';

import type { Client } from './types';

interface NotionBlockProps {
  /** blockId */
  blockId: string;
  client: Client;
}

const Notion: React.FC<NotionBlockProps> = async (props) => {
  const data = await serialize(props);

  return <Render data={data} />;
};

export { Notion };

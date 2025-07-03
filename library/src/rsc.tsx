import type { PropsWithChildren } from 'react';
import React, { Fragment } from 'react';

import { isFullBlock } from '@notionhq/client';

import { createApi } from './api';

import type { NotionComponents, BlockObjectResponse } from './types';

export interface NotionRendererProps {
  components: NotionComponents;
  auth: string;
  blockId: string;
  /** 游标 */
  cursor?: string;
  verbose?: boolean;
}

export const NotionRenderer: React.FC<NotionRendererProps> = async ({
  blockId,
  cursor,
  auth,
  verbose,
  components,
}) => {
  const api = createApi(auth);

  const {
    results,
    has_more: hasMore,
    next_cursor: nextCursor,
  } = await api.blocks.children.list({ block_id: blockId, start_cursor: cursor });

  const data = results.filter(isFullBlock);

  return (
    <>
      {data.map((block) => (
        <BlockRenderer key={block.id} block={block} verbose={verbose} components={components}>
          {block.has_children && <NotionRenderer auth={auth} blockId={block.id} components={components} />}
        </BlockRenderer>
      ))}
      {hasMore && (
        <NotionRenderer
          auth={auth}
          blockId={blockId}
          cursor={nextCursor || undefined}
          components={components}
        />
      )}
    </>
  );
};

type BlockRendererProps = Pick<NotionRendererProps, 'verbose' | 'components'> & {
  block: BlockObjectResponse;
};

const BlockRenderer: React.FC<PropsWithChildren<BlockRendererProps>> = ({
  block,
  verbose,
  children,
  components,
}) => {
  const Comp = components[block.type] ?? Fragment;
  if (!components[block.type] && verbose) {
    console.warn(`[@july_cm/react-notion]: Can not found type '${block.type}' component`);
  }

  return <Comp block={block} children={children} />;
};

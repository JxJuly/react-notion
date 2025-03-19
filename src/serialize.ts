import { Client } from './types';
import { isCompleteBlock } from './utils';

interface SerializeOptions {
  /** blockId */
  blockId: string;
  client: Client;
  /** 游标 */
  startCursor?: string;
}

const serialize = async (options: SerializeOptions): Promise<any[]> => {
  const { blockId, startCursor, client } = options;
  const {
    results,
    has_more: hasMore,
    next_cursor: nextCursor,
  } = await client.blocks.children.list({
    block_id: blockId,
    start_cursor: startCursor,
  });

  const data = await Promise.all(
    results.filter(isCompleteBlock).map(async (block) => {
      const children = [];
      if (block.has_children) {
        const childrenData = await serialize({
          blockId: block.id,
          client,
        });
        children.push(...childrenData);
      }
      return {
        ...block,
        children,
      };
    })
  );

  if (hasMore) {
    const more = await serialize({
      blockId,
      client,
      startCursor: nextCursor,
    });
    data.push(...more);
  }

  return data;
};

export { serialize };

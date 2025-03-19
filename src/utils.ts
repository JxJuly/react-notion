import { PartialBlockObjectResponse, BlockObjectResponse } from './types';

/**
 * 是否是完整的 Block
 */
export const isCompleteBlock = (
  block: PartialBlockObjectResponse | BlockObjectResponse
): block is BlockObjectResponse => !!(block as BlockObjectResponse).type;

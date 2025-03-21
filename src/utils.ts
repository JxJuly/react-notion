import type {
  PartialBlockObjectResponse,
  BlockObjectResponse,
  PageObjectResponse,
  PartialPageObjectResponse,
  PartialDatabaseObjectResponse,
  DatabaseObjectResponse,
} from './types';

/**
 * 是否是完整的 Block
 */
export const isCompleteBlock = (
  block: PartialBlockObjectResponse | BlockObjectResponse
): block is BlockObjectResponse => !!(block as BlockObjectResponse).type;

/**
 * 是完整的 Page
 */
export const isCompletePageObject = (
  page:
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse
): page is PageObjectResponse => page.object === 'page' && !!(page as PageObjectResponse).parent;

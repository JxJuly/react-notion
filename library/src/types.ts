import type React from 'react';

import type {
  BlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ParagraphBlockObjectResponse,
  DividerBlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  ColumnListBlockObjectResponse,
  ColumnBlockObjectResponse,
  QuoteBlockObjectResponse,
  CodeBlockObjectResponse,
  ImageBlockObjectResponse,
  RichTextItemResponse,
  ToDoBlockObjectResponse,
  TableBlockObjectResponse,
  TableRowBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

/** heading 1 block */
export interface Heading1BlockProps {
  block: Heading1BlockObjectResponse;
}
export type IHeading1Block = React.FC<Heading1BlockProps>;

/** heading 2 block */
export interface Heading2BlockProps {
  block: Heading2BlockObjectResponse;
}
export type IHeading2Block = React.FC<Heading2BlockProps>;

/** heading 3 block */
export interface Heading3BlockProps {
  block: Heading3BlockObjectResponse;
}
export type IHeading3Block = React.FC<Heading3BlockProps>;

/** paragraph block */
export interface ParagraphBlockProps {
  block: ParagraphBlockObjectResponse;
}
export type IParagraphBlock = React.FC<ParagraphBlockProps>;

/** bulleted list item block */
export type BulletedListItemBlockProps = React.PropsWithChildren<{
  block: BulletedListItemBlockObjectResponse;
}>;
export type IBulletedListItemBlock = React.FC<BulletedListItemBlockProps>;

/** numbered list item block props */
export type NumberedListItemBlockProps = React.PropsWithChildren<{
  block: NumberedListItemBlockObjectResponse;
}>;
/** numbered list item block */
export type INumberedListItemBlock = React.FC<NumberedListItemBlockProps>;

/** quote block props */
export interface QuoteBlockProps {
  block: QuoteBlockObjectResponse;
}
/** quote block */
export type IQuoteBlock = React.FC<QuoteBlockProps>;

/** divider block props */
export interface DividerBlockProps {
  block: DividerBlockObjectResponse;
}
/** divider block */
export type IDividerBlock = React.FC<DividerBlockProps>;

/** code block props */
export interface CodeBlockProps {
  block: CodeBlockObjectResponse;
}
/** code block */
export type ICodeBlock = React.FC<CodeBlockProps>;

/** todo block props */
export interface ToDoBlockProps {
  block: ToDoBlockObjectResponse;
}
/** todo block */
export type IToDoBlock = React.FC<ToDoBlockProps>;

/** column list block props */
export type ColumnListBlockProps = React.PropsWithChildren<{
  block: ColumnListBlockObjectResponse;
}>;
/** column list block */
export type IColumnListBlock = React.FC<ColumnListBlockProps>;

/** column block props */
export type ColumnBlockProps = React.PropsWithChildren<{
  block: ColumnBlockObjectResponse;
}>;
/** column block */
export type IColumnBlock = React.FC<ColumnBlockProps>;

export type TableBlockProps = React.PropsWithChildren<{
  block: TableBlockObjectResponse;
}>;
export type ITableBlock = React.FC<TableBlockProps>;

export interface TableRowBlockProps {
  block: TableRowBlockObjectResponse;
}
export type ITableRowBlock = React.FC<TableRowBlockProps>;

export interface ImageBlockProps {
  block: ImageBlockObjectResponse;
}
export type IImageBlock = React.FC<ImageBlockProps>;

/**
 * 自定义渲染组件类型
 */
export interface NotionComponents {
  heading_1?: IHeading1Block;
  heading_2?: IHeading2Block;
  heading_3?: IHeading3Block;
  paragraph?: IParagraphBlock;
  bulleted_list_item?: IBulletedListItemBlock;
  numbered_list_item?: INumberedListItemBlock;
  quote?: IQuoteBlock;
  divider?: IDividerBlock;
  code?: ICodeBlock;
  to_do?: IToDoBlock;
  column_list?: IColumnListBlock;
  column?: IColumnBlock;
  table?: ITableBlock;
  table_row?: ITableRowBlock;
  image?: IImageBlock;
}

/**
 * notion sdk 类型透传
 */
export type { BlockObjectResponse, RichTextItemResponse };

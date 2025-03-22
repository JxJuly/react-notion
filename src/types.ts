import React from 'react';

import { Client } from '@notionhq/client';

import type {
  PartialBlockObjectResponse,
  BlockObjectResponse,
  DatabaseObjectResponse,
  PartialDatabaseObjectResponse,
  PageObjectResponse,
  PartialPageObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ParagraphBlockObjectResponse,
  DividerBlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  ColumnListBlockObjectResponse,
  ColumnBlockObjectResponse,
  QuoteBlockObjectResponse,
  CodeBlockObjectResponse,
  ImageBlockObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';

export interface CustomComponentProps<T> {
  block: T;
  children?: React.ReactNode;
}

/**
 * 自定义组件
 */
export type CustomComponent<T> = React.FC<CustomComponentProps<T>>;

export interface CustomComponents {
  block?: React.FC<CustomComponentProps<Record<string, unknown>>>;
  heading_1?: CustomComponent<Heading1BlockObjectResponse>;
  heading_2?: CustomComponent<Heading2BlockObjectResponse>;
  heading_3?: CustomComponent<Heading3BlockObjectResponse>;
  paragraph?: CustomComponent<ParagraphBlockObjectResponse>;
  [key: string]: CustomComponent<any>;
}

/**
 * heading 类型
 */
export type HeadingBlockObjectResponse =
  | Heading1BlockObjectResponse
  | Heading2BlockObjectResponse
  | Heading3BlockObjectResponse;

/**
 * notion 原生类型透传
 */
export type {
  Client,
  PartialBlockObjectResponse,
  BlockObjectResponse,
  DatabaseObjectResponse,
  PartialDatabaseObjectResponse,
  PageObjectResponse,
  PartialPageObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ParagraphBlockObjectResponse,
  DividerBlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  ColumnListBlockObjectResponse,
  ColumnBlockObjectResponse,
  QuoteBlockObjectResponse,
  CodeBlockObjectResponse,
  ImageBlockObjectResponse,
  RichTextItemResponse,
};

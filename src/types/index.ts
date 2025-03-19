import React from 'react';

import { Client } from '@notionhq/client';
import {
  PartialBlockObjectResponse,
  BlockObjectResponse,
  ParagraphBlockObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';

export interface CustomComponentProps<T extends any> {
  block: T;
  children?: React.ReactNode;
  components: Record<string, CustomComponent>;
  client: Client;
}

/**
 * 自定义组件
 */
export type CustomComponent = React.FC<CustomComponentProps<BlockObjectResponse>>;

export interface CustomComponents {
  block?: React.FC<CustomComponentProps<Record<string, unknown>>>;
  [key: string]: React.FC<CustomComponentProps<any>>;
}

/**
 * notion 原生类型透传
 */
export type {
  Client,
  PartialBlockObjectResponse,
  BlockObjectResponse,
  ParagraphBlockObjectResponse,
  RichTextItemResponse,
};

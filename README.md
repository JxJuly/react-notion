# @july_cm/react-notion

React 版本的 notion 渲染器，支持 React Server Components([RSC](https://react.dev/reference/rsc/server-components)) 渲染。

## 安装

```
npm install @july_cm/react-notion
```

仅完全支持 **React v19** 及以上版本，更低版本的 React 不保证其兼容性。

## RSC 开箱即用

在 RSC 架构下，可以直接使用 `@july_cm/react-notion` 透传的 Client，请务必保证 `client` 实例仅运行在 **server-only** 环境已防止 token 泄露。

```tsx
import { Notion, NotionRenderProvider, Client } from '@july_cm/react-notion';

function Page(id: string) {
  const client = new Client({ auth: process.env.NOTION_TOKEN })

  return (
    <NotionRenderProvider components={{
      paragraph: Paragraph
    }}>
      <Notion blockId={id} client={client} />
    </NotionRenderProvider>
  )
}
```

## RCC 环境

RCC 并非本包主力支持的用法（也许未来支持），但也能做到一定程度的使用。

需要注意的是，在这种设计下应当有其私有的服务来封装 notion SDK。

```tsx
import React, { useState, useEffect } from "react";
import { Render, NotionRenderProvider, Client } from '@july_cm/react-notion';

async function Page(id: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const result = await customApi()
    setData(data);
  }, [id]);

  return (
    <NotionRenderProvider components={{
      paragraph: Paragraph
    }}>
      <Render data={data} />
    </NotionRenderProvider>
  )
}
```

## 自定义组件

`@july_cm/react-notion` 本身不提供任何物料，notion 的各类 Block 都需要自行实现

```ts
export interface CustomComponentProps<T> {
  block: T;
  children?: React.ReactNode;
}

/**
 * 自定义组件
 */
export type CustomComponent<T> = React.FC<CustomComponentProps<T>>;
```

## 工具函数

### isCompleteBlock

检查是否是完整的 Block

```typescript
type isCompleteBlock = (block: PartialBlockObjectResponse | BlockObjectResponse) => boolean;
```

### isCompletePageObject

检查是否是完整的 Page

```typescript
type isCompletePageObject = (page:
  | PageObjectResponse
  | PartialPageObjectResponse
  | PartialDatabaseObjectResponse
  | DatabaseObjectResponse) => boolean;
```
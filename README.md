# @july_cm/react-notion

React 版本的 notion 渲染器，支持 React Server Components([RSC](https://react.dev/reference/rsc/server-components)) 渲染。

[✅] 支持 Static Page
[✅] 支持 SSG Page
[✅] 支持 Dynamic Page

仅完全支持 **React v19** 及以上版本，更低版本的 React 不保证其兼容性。

## 安装

```
npm install @july_cm/react-notion
```

## RSC 开箱即用

在 RSC 架构下，可以直接向 `@july_cm/react-notion` 的 `NotionRenderer` 透传 `NOTION_TOKEN`，请务必保证 `NOTION_TOKEN` 仅运行在 **server-only** 环境已防止 token 泄露。

```tsx
import { NotionRenderer } from '@july_cm/react-notion';

function Page(id: string) {
  const blockId = '12345';
  return (
    <NotionRenderer
      auth={process.env.NOTION_TOKEN}
      blockId={blockId}
      components={{
        // 自定义组件
      }}
    />
  )
}
```

## 自定义组件

`@july_cm/react-notion` 本身不提供任何物料，notion 的各类 Block 都需要自行实现

```ts
/**
 * 目前支持的自定义渲染组件类型
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
```

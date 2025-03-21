# @july_cm/react-notion


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
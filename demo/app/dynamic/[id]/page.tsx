import { NotionRenderer } from '@july_cm/react-notion';

import {
  Paragraph,
  Heading1,
  Heading2,
  Heading3,
  BulletedListItem,
  NumberedListItem,
  Quote,
  Code,
  Divider,
  ToDo,
  ColumnList,
  Column,
  Table,
  TableRow,
  Image,
} from '../../__components';

export default function () {
  return (
    <div>
      <h2>Static</h2>
      <NotionRenderer
        auth={process.env.NOTION_TOKEN}
        blockId={process.env.NOTION_BLOCK_ID}
        verbose
        components={{
          heading_1: Heading1,
          heading_2: Heading2,
          heading_3: Heading3,
          paragraph: Paragraph,
          bulleted_list_item: BulletedListItem,
          numbered_list_item: NumberedListItem,
          quote: Quote,
          code: Code,
          divider: Divider,
          to_do: ToDo,
          column_list: ColumnList,
          column: Column,
          table: Table,
          table_row: TableRow,
          image: Image,
        }}
      />
    </div>
  );
}

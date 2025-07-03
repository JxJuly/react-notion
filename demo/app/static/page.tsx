import { NotionRenderer } from '@july_cm/react-notion';

import { Paragraph } from '../__components';

export default function () {
  return (
    <div>
      <h2>Static</h2>
      <NotionRenderer
        auth={process.env.NOTION_TOKEN}
        blockId={process.env.NOTION_BLOCK_ID}
        components={{
          paragraph: Paragraph,
        }}
      />
    </div>
  );
}

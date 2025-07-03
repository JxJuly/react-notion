import { MultipleRichText } from '../rich-text';

import type { IParagraphBlock } from '@july_cm/react-notion';

export const Paragraph: IParagraphBlock = ({ block }) => {
  return (
    <p>
      <MultipleRichText blocks={block.paragraph.rich_text} />
    </p>
  );
};

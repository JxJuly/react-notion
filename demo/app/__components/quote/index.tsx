import { MultipleRichText } from '../rich-text';

import type { IQuoteBlock } from '@july_cm/react-notion';

export const Quote: IQuoteBlock = ({ block }) => {
  return (
    <blockquote>
      <MultipleRichText blocks={block.quote.rich_text} />
    </blockquote>
  );
};

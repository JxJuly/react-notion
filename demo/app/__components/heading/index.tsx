import { MultipleRichText } from '../rich-text';

import type { IHeading2Block, IHeading3Block, IHeading1Block } from '@july_cm/react-notion';

export const Heading1: IHeading1Block = ({ block }) => {
  return (
    <h1>
      <MultipleRichText blocks={block.heading_1.rich_text} />
    </h1>
  );
};

export const Heading2: IHeading2Block = ({ block }) => {
  return (
    <h2>
      <MultipleRichText blocks={block.heading_2.rich_text} />
    </h2>
  );
};

export const Heading3: IHeading3Block = ({ block }) => {
  return (
    <h3>
      <MultipleRichText blocks={block.heading_3.rich_text} />
    </h3>
  );
};

import { MultipleRichText } from '../rich-text';
import { Checkbox } from './checkbox';

import type { IToDoBlock } from '@july_cm/react-notion';

export const ToDo: IToDoBlock = ({ block }) => {
  return (
    <div>
      <Checkbox checked={block.to_do.checked} />
      <MultipleRichText blocks={block.to_do.rich_text} />
    </div>
  );
};

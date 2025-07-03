import { MultipleRichText } from '../rich-text';

import type { IBulletedListItemBlock } from '@july_cm/react-notion';

import './index.css';

export const BulletedListItem: IBulletedListItemBlock = ({ block, children }) => {
  return (
    <div className="bulleted-item">
      <MultipleRichText blocks={block.bulleted_list_item.rich_text} />
      {children}
    </div>
  );
};

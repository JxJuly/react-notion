import type { IColumnListBlock, IColumnBlock } from '@july_cm/react-notion';

import './index.css';

export const ColumnList: IColumnListBlock = ({ children }) => {
  return <div className="column-list">{children}</div>;
};

export const Column: IColumnBlock = ({ block, children }) => {
  return (
    <div className="column" style={{ flex: block.column.width_ratio }}>
      {children}
    </div>
  );
};

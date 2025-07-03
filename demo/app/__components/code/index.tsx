import type { ICodeBlock } from '@july_cm/react-notion';

export const Code: ICodeBlock = ({ block }) => {
  return (
    <pre>
      <code className={`language-${block.code.language}`}>{block.code.rich_text[0].plain_text}</code>
    </pre>
  );
};

import React from 'react';

import { isTextRichTextItemResponse } from '@july_cm/react-notion';

import { AnnotationSpan } from './annotation-span';

import type { RichTextItemResponse, TextRichTextItemResponse } from '@july_cm/react-notion';

import './index.css';

type PlainTextProps = {
  block: TextRichTextItemResponse;
} & React.HTMLAttributes<HTMLSpanElement>;

const PlainText: React.FC<PlainTextProps> = ({ block, ...props }) => {
  const { plain_text: text, annotations, href } = block;
  const isLink = !!href;
  const isCode = !!annotations.code;

  if (isLink) {
    return (
      <a href={href} target="_blank" {...props}>
        <AnnotationSpan annotations={annotations}>{text}</AnnotationSpan>
      </a>
    );
  }
  if (isCode) {
    return (
      <code {...props}>
        <AnnotationSpan annotations={annotations}>{text}</AnnotationSpan>
      </code>
    );
  }

  return (
    <AnnotationSpan annotations={annotations} {...props}>
      {text}
    </AnnotationSpan>
  );
};

type RichTextProps = {
  block: RichTextItemResponse;
} & React.HTMLAttributes<HTMLSpanElement>;

const RichText: React.FC<RichTextProps> = ({ block, ...props }) => {
  if (isTextRichTextItemResponse(block)) {
    return <PlainText block={block} {...props} />;
  }
  return null;
};

const MultipleRichText: React.FC<{ blocks: RichTextItemResponse[] }> = ({ blocks }) => {
  return blocks.map((block) => <RichText key={block.plain_text} block={block} />);
};

export { RichText, MultipleRichText };

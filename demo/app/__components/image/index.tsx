import type { IImageBlock } from '@july_cm/react-notion';

export const Image: IImageBlock = ({ block }) => {
  const url = block.image.type === 'file' ? block.image.file.url : block.image.external.url;

  return <img src={url} />;
};

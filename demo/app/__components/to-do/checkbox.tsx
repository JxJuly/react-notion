'use client';

export const Checkbox: React.FC<{ checked?: boolean }> = ({ checked }) => {
  return <input type="checkbox" checked={checked} onClick={(e) => e.preventDefault()} />;
};

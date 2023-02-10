import React, { ReactNode } from 'react';

interface Props {
  content: ReactNode;
}

export default function App({ content }: Props) {
  return (
    <div>
      <div>Hello</div>,
      <br />
      <span>{content}</span>
    </div>
  );
}

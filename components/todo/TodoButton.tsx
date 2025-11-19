"use client";

import React from "react";

type Props = {
  className: string;
  onClick: () => void;
  children: React.ReactNode;
};
const TodoButton = ({ className, onClick, children }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default TodoButton;

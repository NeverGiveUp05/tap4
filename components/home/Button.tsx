'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      type='button'
      className={`h-8 rounded-[4px] bg-white px-4 text-center text-[#1E1E28] hover:opacity-80 ${className}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </button>
  );
}

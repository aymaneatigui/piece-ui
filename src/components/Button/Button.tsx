import React, { FC } from 'react';

export interface ButtonProps {}

export const Button: FC<ButtonProps> = () => {
  return <button className='py-2 px-4 bg-slate-200 rounded-full'>Button</button>;
};

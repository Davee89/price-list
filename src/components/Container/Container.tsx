import { ReactNode } from 'react';

type Props = { children: ReactNode };

export const Container = ({ children }: Props) => {
  return <div className='flex flex-col w-full p-2 items-center'>{children}</div>;
};

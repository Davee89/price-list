import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Subtitle = ({ children }: Props) => {
  return (
    <div className='flex items-center w-full md:w-[60%]'>
      <span className='w-full h-[3px] bg-yellow-600 bg-opacity-40 rounded-md' />
      <h2 className='min-w-max p-2 font-bold text-center max-[350px]:min-w-fit'>{children}</h2>
      <span className='w-full h-[3px] bg-yellow-600 bg-opacity-40 rounded-md' />
    </div>
  );
};

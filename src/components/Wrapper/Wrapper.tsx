import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Wrapper = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center min-h-[100vh] w-[100vw] h-[auto] bg-[url('/bg-last.png')] bg-cover md:m-auto bg-opacity-0">
      {children}
    </div>
  );
};

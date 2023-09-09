type Props = {
  title: string;
  price: string;
};

export const Item = ({ title, price }: Props) => {
  return (
    <div className='flex py-[2px] flex-row justify-between items-center gap-4 w-full md:justify-center'>
      <p className='w-[60%] md:w-[30%] '>{title}</p>
      <p className='w-[40%] text-end md:w-[30%]'>{price}</p>
    </div>
  );
};

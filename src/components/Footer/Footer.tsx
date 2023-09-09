export const Footer = () => {
  return (
    <footer className='flex gap-2 justify-center items-center w-full md:w-[60%] md:py-2 tracking-wider text-center mt-2 text-yellow-600 opacity-50 border-t-yellow-600 border'>
      <p className=''>OM Kosmetologia</p>
      <a href='https://www.facebook.com/KosmetologiaOksanaMatras/'>
        <img className=' w-[24px] h-[24px]' src='/fb.svg' alt='fb' />
      </a>
      <a href='https://www.instagram.com/om_kosmetologia/'>
        <img className=' w-[24px] h-[24px]' src='/insta.svg' alt='insta' />
      </a>
    </footer>
  );
};

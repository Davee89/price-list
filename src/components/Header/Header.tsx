import { Dispatch } from 'react';
import { Button } from '../Button';
import { Language } from '../../assets/data';

type Props = {
  setLanguage: Dispatch<React.SetStateAction<Language>>;
  pl: boolean;
};

export const Header = ({ pl, setLanguage }: Props) => {
  return (
    <header className={`opacity-30 flex flex-row gap-2 w-full p-4 justify-end md:w-[60%] `}>
      <Button onClick={() => setLanguage('PL')}>
        <p className={`text-xl ${pl ? 'font-bold text-yellow-600 opacity-80' : ''}`}>PL</p>
      </Button>
      <Button onClick={() => setLanguage('UA')}>
        <p className={`text-xl ${pl ? '' : 'font-bold text-yellow-600 opacity-80'}`}>UA</p>
      </Button>
    </header>
  );
};

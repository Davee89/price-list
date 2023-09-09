export type Language = 'PL' | 'UA';

type Item = {
  title: string;
  price: string;
};

type ItemsList = {
  name: string;
  items: Item[];
};

type ItemsData = Record<Language, ItemsList[]>;

export const itemsData: ItemsData = {
  PL: [
    {
      name: 'Dermapen 4 (Ze znieczuleniem)',
      items: [
        { title: 'Twarz', price: '550 ZŁ' },
        { title: 'Twarz + Szyja', price: '650 ZŁ' },
        { title: 'Twarz + Szyja + Dekolt', price: '750 ZŁ' },
        { title: 'Peeling Uber Pro dodatkowo do zabiegu', price: '+100 ZŁ' },
      ],
    },
    {
      name: 'Mezoterapia igłowa',
      items: [
        { title: 'Twarz', price: '350 ZŁ' },
        { title: 'Twarz, Szyja', price: '400 ZŁ' },
        { title: 'Twarz, Szyja, Dekolt', price: '500 ZŁ' },
        { title: 'Okolice Oczu', price: '250-300 ZŁ' },
        { title: 'Mezoterapia Skóry Głowy', price: '300 ZŁ' },
        { title: 'Mezoterapia Skóry Głowy DR.CY', price: '500 ZŁ' },
        { title: 'Mezoterapia na dłonie', price: '300 ZŁ' },
      ],
    },
    {
      name: 'Mezoterapia igłowa Premium/Biorewitalizacja',
      items: [
        { title: 'Neauvia hydro deluxe 1,0 ml/2,5 ml', price: '420/490 ZŁ' },
        { title: 'Aquashine  2,0 ml', price: '490 ZŁ' },
        { title: 'Electri 1,5 ml', price: '490 ZŁ' },
        { title: 'Xela Rederm 1,1 % 1,0 ml / 2,0 ml', price: '500/600 ZŁ' },
        { title: 'Xela Rederm 1,8 % 1,0 ml / 2,0 ml', price: '550/650 ZŁ' },
        { title: 'Xela Rederm 2,2 % 1,0 ml / 2,0 ml', price: '590/790 ZŁ' },
      ],
    },
    {
      name: 'Stymulatory tkankowe',
      items: [
        { title: 'Twac Eyes 1,0 ml', price: '550 ZŁ' },
        { title: 'Vitaran 1,0 ml', price: '450 ZŁ' },
        { title: 'Jalupro 3,0 ml', price: '490 ZŁ' },
        { title: 'Jalupro HMF 2,5 ml', price: '600 ZŁ' },
        { title: 'Nucleofill Strong/Medium 1,5 ml', price: '700 ZŁ' },
        { title: 'Nucleofill soft Eyes 2,0 ml', price: '700 ZŁ' },
        { title: 'Karisma 2,0 ml', price: '800 ZŁ' },
      ],
    },
    {
      name: 'Konsultacja',
      items: [
        { title: 'W dniu zabiegu bezpłatna', price: '100 ZŁ' },
        { title: 'Konsultacja przy trądziku', price: '200 ZŁ' },
      ],
    },
    {
      name: 'Zabiegi oczyszczające',
      items: [
        { title: 'Oczyszczanie kombinowane', price: '230 ZŁ' },
        { title: 'Oczyszczanie kombinowane + peeling medyczny', price: '250 ZŁ' },
        { title: 'Oczyszczanie wodorowe zabieg podstawowy', price: '250 ZŁ' },
        { title: 'Oczyszczanie wodorowe zabieg rozszerzony', price: '300 ZŁ' },
        { title: 'Oczyszczanie wodorowe + bio re peel', price: '350 ZŁ' },
      ],
    },
    {
      name: 'Zabiegi na twarz',
      items: [
        { title: 'Zabieg Indywidualnie dobrany', price: 'Od 200 ZŁ' },
        { title: 'Zabieg dla skóry trądzikowej', price: 'Od 250 ZŁ' },
        { title: 'Zabieg dla skóry wrażliwej', price: 'Od 230 ZŁ' },
        { title: 'Zabieg przeciwstarzeniowy', price: 'Od 260 ZŁ' },
        { title: 'Bio re peel, PRX T33', price: '250 ZŁ' },
        { title: 'Żółty peeling medyczny', price: '300 ZŁ' },
      ],
    },
    {
      name: 'Zabiegi na twarz szyje i dekolt',
      items: [
        { title: 'Rozjaśniający-odżywczy z witaminą C', price: '260 ZŁ' },
        { title: 'Liftingujący-napinający', price: '340 ZŁ' },
      ],
    },
    {
      name: 'Paramedyczne zabiegi enzymatyczne',
      items: [
        { title: 'Podstawowy zabieg', price: '300 ZŁ' },
        { title: 'Rozszerzony', price: '320 ZŁ' },
      ],
    },
  ],
  UA: [],
};

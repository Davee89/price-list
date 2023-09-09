import { useState } from 'react';
import { Language, itemsData } from './assets/data';
import { Container, Footer, Header, Item, Subtitle, Wrapper } from './components';

const App = () => {
  const [language, setLanguage] = useState<Language>('PL');
  const pl = language === 'PL';

  return (
    <Wrapper>
      <Header pl={pl} setLanguage={setLanguage} />
      <h1>Cennik</h1>
      {itemsData[language].map(({ name, items }) => (
        <Container key={name}>
          <Subtitle children={name} />
          <Container>
            {items.map(({ price, title }) => (
              <Item key={title + price} title={title} price={price} />
            ))}
          </Container>
        </Container>
      ))}
      <Footer />
    </Wrapper>
  );
};

export default App;

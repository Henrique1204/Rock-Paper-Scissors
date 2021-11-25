import React from 'react';

import Header from './Components/Header';
import ItemEscolha from './Components/ItemEscolha';

const App: React.FC = () => {
  return (
    <>
      <Header />

      <ItemEscolha escolha='scissors' />
    </>
  );
};

export default App;

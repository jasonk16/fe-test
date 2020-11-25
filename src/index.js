import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from 'regenerator-runtime';

import NameContext from './.components/nameContext';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';

const App = () => {
  const [selectedAccount, setSelectedAccount] = useState();

  return (
    <NameContext>
      <Header />
      <Dashboard currentAccountName={setSelectedAccount} />
      <Footer selectedAccount={selectedAccount} />
    </NameContext>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

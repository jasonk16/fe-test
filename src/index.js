import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import NameContext from './.components/nameContext';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';

const App = () => {
  const [selectedAccount, setSelectedAccount] = useState();
  return (
    <NameContext>
      <Header />
      <Dashboard selectedAccountName={setSelectedAccount} />
      <Footer selectedAccount={selectedAccount} />
    </NameContext>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

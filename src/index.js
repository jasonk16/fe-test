import React from 'react';
import ReactDOM from 'react-dom';

import NameContext from './.components/nameContext';
import Header from './Header';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <NameContext>
      <Header />
      <Dashboard />
    </NameContext>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

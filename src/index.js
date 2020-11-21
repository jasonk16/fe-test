import React from 'react';
import ReactDOM from 'react-dom';

import NameContext from './.components/nameContext';
import Header from './.components/header'; 
import Dashboard from './Dashboard';

const App = () => {
  return (
    <NameContext>
      <Header/>
      <Dashboard />
    </NameContext>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

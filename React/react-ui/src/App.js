import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Page1 from './components/Page1/page1';

const App = () => {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Page1 />
      </BrowserRouter>
    </div>
  );
};

export default App;

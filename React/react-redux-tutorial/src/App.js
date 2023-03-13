import React from 'react';
import CounterContainer from './Container/CounterContainer';
import TodosContainer from './Container/TodosContainer';

const App = () => {
  return (
    <div>
      <h1>리덕스 공부</h1>
      <hr />
      <CounterContainer />
      <hr />
      <TodosContainer />
      <hr />
    </div>
  );
};

export default App;

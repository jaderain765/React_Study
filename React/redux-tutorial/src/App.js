import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const 가져온값 = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{가져온값}</div>
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        감소
      </button>
    </div>
  );
};

export default App;

import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../Components/Counter';
import { decrease, increase } from '../Modules/counter';

const CounterContainer = () => {
  // useSelector로 state 가져옴
  const number = useSelector((state) => state.counter.number);
  // useDispatch 로 dispatch 선언 후 액션 할당
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />;
};

export default CounterContainer;

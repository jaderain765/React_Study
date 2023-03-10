// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialState = { toggle: false, counter: 0 };

// state가 undefined일 때는 initalState
function reducer(state = initialState, action) {
  switch (action.type){
    case TOGGLE_SWITCH:
      return { ...state, toggle: !state.toggle };
    case INCREASE:
      return { ...state, counter: state.counter + action.difference };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

// const store = createStore(reducer);
const store = configureStore({
  reducer: reducer
});

const render = () => {
  const state = store.getState();
  // 토글 처리
  if(state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

render();
store.subscribe(render);
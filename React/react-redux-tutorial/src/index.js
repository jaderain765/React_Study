// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import rootReducer from './Modules';

// const store = configureStore({
//   reducer: rootReducer,
//   enhancers: [composeWithDevTools()]
// });

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import rootReducer from './Modules';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(false),
  // devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();

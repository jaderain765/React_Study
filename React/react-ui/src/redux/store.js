import { configureStore } from '@reduxjs/toolkit';
import rootSlice from './slice/rootSlice';

const store = configureStore({
  reducer: {
    root: rootSlice,
  },
});

export default store;

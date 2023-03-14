import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: true,
  message: '',
};

const msgbox = createSlice({
  name: 'msgbox',
  initialState,
  reducers: {
    open(state, action) {
      state.open = true;
      state.message = action.payload;
    },
    close(state) {
      state.open = false;
    },
  },
});

export const { open, close } = msgbox.action;
export default msgbox.reducer;

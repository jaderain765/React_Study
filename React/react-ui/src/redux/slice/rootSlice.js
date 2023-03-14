import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawerWidth: 240,
  open: true,
  userInfo: [],
  menuInfo: [],
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setDrawerWidth: (state, actions) => {
      state.drawerWidth = actions.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setMenuInfo: (state, action) => {
      state.menuInfo = action.payload;
    },
    addMenu: (state, action) => {
      console.log('추가 메뉴');
      state.menuInfo.push(action.payload);
    },
    updateMenu: (state, action) => {
      console.log('업데이트 메뉴');
    },
    removeMenu: (state, action) => {
      console.log('삭제 메뉴');
      for (let i = 0; i < state.menuInfo.length; i++) {
        if (state.menuInfo[i].progNo === action.payload.progNo)
          state.menuInfo[i].usedYn = 'N';
      }
    },
  },
});

export const {
  setDrawerWidth,
  setOpen,
  setUserInfo,
  setMenuInfo,
  addMenu,
  updateMenu,
  removeMenu,
} = rootSlice.actions;
export default rootSlice.reducer;

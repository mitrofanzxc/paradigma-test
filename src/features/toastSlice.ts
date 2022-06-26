import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IToast {
  isToastOpen: boolean;
}

const initialState: IToast = {
  isToastOpen: false,
};

export const toastSlice = createSlice({
  name: 'isToastOpen',
  initialState,
  reducers: {
    switchToastOn: (state) => {
      state.isToastOpen = true;
    },
    switchToastOff: (state) => {
      state.isToastOpen = false;
    },
    switchToastByAmount: (state, action: PayloadAction<boolean>) => {
      state.isToastOpen = action.payload;
    },
  },
});

export const { switchToastOn, switchToastOff, switchToastByAmount } = toastSlice.actions;
export default toastSlice.reducer;

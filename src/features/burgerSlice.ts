import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IBurger {
  isBurgerOpen: boolean;
}

const initialState: IBurger = {
  isBurgerOpen: false,
};

export const burgerSlice = createSlice({
  name: 'isBurgerOpen',
  initialState,
  reducers: {
    switchBurgerOn: (state) => {
      state.isBurgerOpen = true;
    },
    switchBurgerOff: (state) => {
      state.isBurgerOpen = false;
    },
    switchBurgerToggle: (state) => {
      state.isBurgerOpen = !state.isBurgerOpen;
    },
    switchBurgerByAmount: (state, action: PayloadAction<boolean>) => {
      state.isBurgerOpen = action.payload;
    },
  },
});

export const { switchBurgerOn, switchBurgerOff, switchBurgerToggle, switchBurgerByAmount } =
  burgerSlice.actions;
export default burgerSlice.reducer;

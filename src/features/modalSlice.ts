import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IModal {
  isModalOpen: boolean;
}

const initialState: IModal = {
  isModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'isModalOpen',
  initialState,
  reducers: {
    switchModalOn: (state) => {
      state.isModalOpen = true;
    },
    switchModalOff: (state) => {
      state.isModalOpen = false;
    },
    switchModalByAmount: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { switchModalOn, switchModalOff, switchModalByAmount } = modalSlice.actions;
export default modalSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modalSlice';
import toastReducer from '../features/toastSlice';
import burgerReducer from '../features/burgerSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    toast: toastReducer,
    burger: burgerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

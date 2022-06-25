import { configureStore } from '@reduxjs/toolkit';

const STORE = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof STORE.getState>;
export type AppDispatch = typeof STORE.dispatch;

export { STORE };

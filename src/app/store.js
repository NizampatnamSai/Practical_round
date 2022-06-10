import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/LoginSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

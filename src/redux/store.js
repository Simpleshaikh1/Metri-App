import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './coinlore/CoinSlice';

const store = configureStore({
  reducer: {
    coinLi: coinReducer,
  },
});

export default store;

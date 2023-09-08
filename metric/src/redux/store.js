import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './coinlore/CoinSlice';

const store = configureStore({
  reducer: {
    coin: coinReducer,
  },
});

export default store;

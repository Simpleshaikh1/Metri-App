import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  coinList: [],
  isLoading: false,
  error: '',
};

// const getCoinUrl = 'https://api.coinlore.net/api/tickers/';
const getCoinUrl = 'https://api.coincap.io/v2/assets';

export const getCoins = createAsyncThunk('coins/getCoins', async (_, api) => {
  try {
    const res = await axios(getCoinUrl);
    return res.data;
  } catch (error) {
    return api.rejectWithValue('Api failed to fetch');
  }
});

const coinSlice = createSlice({
  name: 'coins',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.coins = action.payload;
        state.error = '';
      })
      .addCase(getCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.coin = [];
        state.error = action.error.message;
      });
  },
});

export default coinSlice.reducer;

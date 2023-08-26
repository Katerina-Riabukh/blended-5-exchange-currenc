import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentPosition } from 'servise/API';

export const fetchBaseCurrency = createAsyncThunk(
  'fetch/baseCurrency',
  async (credentials, thunkApi) => {
    const state = thunkApi.getState();
    const persistedBaseCurrency = state.currency.baseCurrency;
    if (persistedBaseCurrency) {
      return thunkApi.rejectWithValue('We alreade have currency');
    }

    try {
      const baseCurrency = await getCurrentPosition(credentials);
      return baseCurrency;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

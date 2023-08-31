import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameInfo: [],
  isLoading: true,
  error: null,
};

const gameCardSlice = createSlice({
  name: 'gameCard',
  initialState,
  reducers: {
    updateGameCardBegin: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    updateGameCard: (state, action) => {
      state.isLoading = false;
      state.gameInfo = action.payload;
    },
    updateGameCardError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  updateGameCardBegin,
  updateGameCard,
  updateGameCardError,
} = gameCardSlice.actions;

export default gameCardSlice.reducer;

export const fetchGameCard = (gameId) => async (dispatch) => {
  dispatch(updateGameCardBegin());
  try {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: {
        'id': gameId
      },
      headers: {
        'X-RapidAPI-Key': 'f1dbe29abamshbce55a74950492cp100007jsn763703e54ceb',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);
    dispatch(updateGameCard(response.data));
  } catch (error) {
    dispatch(updateGameCardError(error.message));
  }
};
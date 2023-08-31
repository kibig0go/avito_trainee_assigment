import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
  selectedCategory: '',
  selectedPlatform: '',
  selectedSorting: '',
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    updateGamesBegin: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    updateGames: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    updateGamesError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setPlatform: (state, action) => {
      state.selectedPlatform = action.payload;
    },
    clearPlatform: (state) => {
      state.selectedPlatform = '';
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearCategory: (state) => {
      state.selectedCategory = '';
    },
    setSorting: (state, action) => {
      state.selectedSorting = action.payload;
    },
    clearSorting: (state) => {
      state.selectedSorting = '';
    },
  },
});

export const {
  updateGamesBegin,
  updateGames,
  updateGamesError,
  setPlatform,
  clearPlatsetPlatform,
  setSorting,
  clearSorting,
  setCategory,
  clearCategory,
} = gamesSlice.actions;

export default gamesSlice.reducer;

export const fetchGames = (platform, category, sorting) => async (dispatch) => {
  dispatch(updateGamesBegin());
  try {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {
        'platform': platform,
        'category': category,
        'sort-by': sorting
      },
      headers: {
        'X-RapidAPI-Key': '9451721467msh4fbb144255aeb60p177453jsn162e5facc2e8',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);
    dispatch(updateGames(response.data));
  } catch (error) {
    dispatch(updateGamesError(error.message));
  }
};
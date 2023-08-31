import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from '../features/games/gamesSlise'
import gameCardReducer from '../features/games/gameCardSlice'

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    gameCard: gameCardReducer,
  },
})
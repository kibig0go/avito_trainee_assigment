import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import { GameList } from './pages/GameList';
import { Game } from './pages/Game';
import { Notfound } from './pages/Notfound';

import { Wrapper } from './components/Layout';

import { fetchGames, setPlatform, setCategory, setSorting } from './features/games/gamesSlise';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.games.error);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  if (error)
    alert('Error occured while fetching games')

  return (
    <>
      <Routes>
        <Route path='/' element={<Wrapper />}>
          <Route index element={<GameList />} />
          <Route path='game/:id' element={<Game />} />
          <Route path='*' element={<Notfound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
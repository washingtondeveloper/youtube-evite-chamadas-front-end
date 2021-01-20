import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Drinks from './components/Drinks';
import SelectedDrink from './components/SelectedDrink';
import { fetchDrinks } from './store/drinks';

function App() {
  const drinks = useSelector(state => state.drinks.items)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDrinks())
  }, [dispatch]);

  return (
    <main className="main">
      <Drinks drinks={drinks} />
      <SelectedDrink />
    </main>
  );
}

export default App;

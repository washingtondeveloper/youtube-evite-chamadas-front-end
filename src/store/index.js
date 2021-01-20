import { configureStore } from '@reduxjs/toolkit';

import drinks from './drinks'

export default configureStore({
  reducer: {
    drinks
  },
});
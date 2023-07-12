import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';

import contactsReducer from './conactSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

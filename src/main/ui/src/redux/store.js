

import { configureStore} from '@reduxjs/toolkit';
import booksReducer from './bookSlice';
import uiReducer from './uiSlice';

const store = configureStore({
    reducer:{
        books: booksReducer,
        ui: uiReducer,
    }
});

export default store;
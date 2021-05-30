import { createStore } from '@reduxjs/toolkit';

const booksReducer = (state={ books: []},action) => {
    if(action.type == 'ADD'){
        return{
            books
        }
    }
    if(action.type == 'DELETE'){

    }
    if(action.type == 'MODIFY'){

    }

    return state;
}

const store = createStore(booksReducer);

export default store;
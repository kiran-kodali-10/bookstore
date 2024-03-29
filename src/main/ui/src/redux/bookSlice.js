import { createSlice } from '@reduxjs/toolkit';


const initialState = { books: [], isLoading: true, changed: false }
export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        add: (state, action) => {
            const book = {
                bookId: action.payload.bookId,
                bookTitle: action.payload.bookTitle,
                author: action.payload.author,
                rating: action.payload.rating,
                category: action.payload.category,
            }
            state.books.push(book);
        },
        delete: (state) => {

        },
        update: (state, action) => {
            // state.books.forEach((book)=>{
            //     if(book.bookId === action.payload.bookId){
                    
            //     }
            // })
        },
        getBooks: (state, action) => {
            state.books = action.payload.books;
            state.isLoading = false;
        },
    }

});


export const bookActions = bookSlice.actions

export default bookSlice.reducer;
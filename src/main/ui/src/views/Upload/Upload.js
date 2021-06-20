import { Button, makeStyles, Select } from '@material-ui/core';
import styles from '../viewStyles';
import React, { useState } from 'react';
import CustomTextField from '../../components/CustomTextField/CustomTextField';
import { bookActions } from '../../redux/bookSlice';
import { useDispatch } from 'react-redux';
import { uploadBook } from '../../redux/books';

const useStyles = makeStyles(styles);

export default function AddBook(props) {
    const classes = useStyles();

    // Single state to store all the form data
    const [state, setState] = useState({
        bookTitle: '',
        author: '',
        rating: 0,
        category: '',
    })

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`
            title: ${state.title}
            author: ${state.author}
            rating: ${state.rating}
            category: ${state.category}
        `);
        dispatch(bookActions.add({
            title: state.bookTitle,
            author: state.author,
            rating: state.rating,
            category: state.category,
            changed: true,
        }));
        // const data = {
        //     bookTitle: title,
        //     author: author,
        //     rating: rating,
        //     category: category
        // }

        dispatch(uploadBook(state));

    }


    // Handle the input change
    const newHandleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    }

    return (
        <div>
            <h2 style={{ color: "white" }}>Upload Book</h2>
            <form className={classes.formStyle} onSubmit={event => handleSubmit(event)}>
                <CustomTextField
                    id="title"
                    type="text"
                    label="Book Title"
                    placeholder="Enter the title of book"
                    onChange={newHandleChange}
                    value={state.bookTitle}
                    required
                    inputProps={{
                        name: "bookTitle"
                    }}
                />
                <CustomTextField
                    id="author"
                    type="text"
                    label="Author"
                    placeholder="Enter the title of book"
                    onChange={newHandleChange}
                    value={state.author}
                    required
                    inputProps={{
                        name: 'author'
                    }}
                />
                <CustomTextField
                    id="rating"
                    type="number"
                    label="Rating" placeholder="Enter the rating"
                    onChange={newHandleChange}
                    value={state.rating}
                    required
                    inputProps={{
                        name: 'rating',
                        min: 0,
                        max: 5,
                    }}
                />
                <Select
                    id="category"
                    type="text"
                    label="Category"
                    placeholder="Select the category"
                    onChange={newHandleChange}
                    value={state.category}
                    required
                    className={classes.dropdown}
                    inputProps={{
                        name: 'category',
                    }}

                >
                    <option value="Web Development">Web Development</option>
                    <option value="Programming">Programming</option>
                    <option value="Networking">Networking</option>
                </Select>
                <Button type="submit" className={classes.buttonStyle}>Submit</Button>
            </form>
        </div>
    )

}

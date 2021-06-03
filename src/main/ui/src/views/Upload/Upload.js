import { Grid, Button, makeStyles, TextField } from '@material-ui/core';
import styles from '../viewStyles';
import React, { useState } from 'react';
import CustomTextField from '../../components/CustomTextField/CustomTextField';
import { bookActions } from '../../redux/bookSlice';
import { useDispatch } from 'react-redux'
import { uploadBook } from '../../redux/books'

const useStyles = makeStyles(styles);

export default function AddBook(props) {
    const classes = useStyles();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState(0);
    const [category, setCategory] = useState("");

    const data = {
        title: '',
        author: '',
        rating: 0,
        category: '',
    }

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`
            title: ${title}
            author: ${author}
            rating: ${rating}
            category: ${category}
        `);
        dispatch(bookActions.add({
            title: title,
            author: author,
            rating: rating,
            category: category,
            changed: true,
        }));
        const data = {
            bookTitle: title,
            author: author,
            rating: rating,
            category: category
        }

        dispatch(uploadBook(data));

        // const uploadData = async () => {
        //     const response = await fetch('/book', {
        //         method: "POST",
        //         mode: 'cors',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     });
        //     if (!response.ok) {
        //         alert("error while adding new book")
        //     }
        //     else {
        //         const data = await response.json();
        //         console.log(data);
        //         alert("added book successfully")
        //     }
        // }
        // uploadData();
        // resetData();

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
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                    required
                />
                <CustomTextField
                    id="author" type="text"
                    label="Author"
                    placeholder="Enter the title of book"
                    onChange={event => setAuthor(event.target.value)}
                    value={author}
                    required
                />
                <CustomTextField
                    id="rating"
                    type="number"
                    InputProps={{ inputProps: { min: 0, max: 5, htmlFor: "number" } }}
                    label="Rating" placeholder="Enter the rating"
                    onChange={event => setRating(event.target.value)}
                    value={rating}
                    required
                />
                <CustomTextField
                    id="author"
                    type="text"
                    label="Category"
                    placeholder="Enter the category"
                    onChange={event => setCategory(event.target.value)}
                    value={category}
                    required
                />
                <Button type="submit" className={classes.buttonStyle}>Submit</Button>
            </form>
        </div>
    )

}

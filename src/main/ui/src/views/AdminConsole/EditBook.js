import React, { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../viewStyles';

const useStyles = makeStyles(styles);


export default function EditBook(props) {
    const classes = useStyles();

    const [state, setState] = useState({
        bookDetails: props.bookDetails,

    })

    useEffect(() => {
        // console.log(props.bookDetails)
        setState({
            bookDetails: props.bookDetails
        })
    }, [props.bookDetails])

    // Function to handle input change
    const handleInputChange = (event) => {
        const name = event.target.name;
        console.log(`name: ${name}, value: ${event.target.value}`)
        setState(prevState => ({
            bookDetails: {
                ...prevState.bookDetails,
                [name]: event.target.value,
            }
        }))
    }

    // Function to handle the form submit
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (
            state.bookDetails["bookTitle"] === props.bookDetails["bookTitle"] &&
            state.bookDetails["author"] === props.bookDetails["author"] &&
            state.bookDetails["category"] === props.bookDetails["category"]
        ){
            alert("There are no changes to be done, please modify")
        }
        else{
            props.handleEditSubmit(state.bookDetails);
            // console.log(state.bookDetails)
        }
    }

    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
        >
            <div className={classes.modalStyle}>
                <h3>Edit Book Details</h3>
                {/* <div > */}
                <form className={classes.editForm} onSubmit={handleFormSubmit}>
                    <label htmlFor="bookTitle">
                        Book Title
                        <input
                            name="bookTitle"
                            id="bookTitle"
                            type="text"
                            value={state.bookDetails["bookTitle"]}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="author">
                        Author
                        <input
                            name="author"
                            id="author"
                            type="text"
                            value={state.bookDetails["author"]}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="category">
                        Category
                        <select
                            id="category"
                            type="text"
                            label="Category"
                            placeholder="Select the category"
                            onChange={handleInputChange}
                            value={state.bookDetails["category"]}
                            required
                            name="category"

                        >
                            <option value="Web Development">Web Development</option>
                            <option value="Programming">Programming</option>
                            <option value="Networking">Networking</option>
                        </select>
                    </label>
                    <Button type="submit" className={classes.buttonStyle}>Submit</Button>
                </form>
                {/* </div> */}
            </div>
        </Modal>
    )
}
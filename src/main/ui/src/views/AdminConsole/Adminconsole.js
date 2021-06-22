import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import styles from '../viewStyles';
import Swal from 'sweetalert2';
import { deleteBook, updateBook } from '../../redux/books';
import EditBook from './EditBook';

const useStyles = makeStyles(styles);

export default function AdminConsole() {
    const classes = useStyles();

    const books = useSelector(state => state.books.books);
    const dispatch = useDispatch();

    const [state, setState] = useState({
        open: false,
        bookDetails: {}
    })

    const handleBookDelete = (bookId) => {
        console.log("Inside handle book delete")

        Swal.fire({
            title: "Warning",
            icon: 'warning',
            text: 'Are you sure',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Yes, Delete",
            cancelButtonText: "Cancel",
        })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteBook(bookId))
                }
            })
    }

    // Function to handle the modal close
    const handleBookEdit = (book) => {
        console.log(`book id: ${book['bookTitle']}`);
        setState({
            // ...state,
            open: !state.open,
            bookDetails: book
        })
    }

    const handleEditSubmit = (bookDetails) =>{
        dispatch(updateBook(bookDetails));
        // console.log(bookDetails);
        setState({
            ...state,
            open: !state.open,
        })
    }

    return (
        <div>
            <EditBook open={state.open} onClose={handleBookEdit} bookDetails={state.bookDetails} handleEditSubmit={handleEditSubmit} />
            <Grid
                container
            >
                <Grid item md={12} sm={12} xs={12}>
                    <TableContainer>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ color: "white" }}>Book Title</TableCell>
                                    <TableCell style={{ color: "white" }}>Author</TableCell>
                                    <TableCell style={{ color: "white" }}>Category</TableCell>
                                    <TableCell style={{ color: "white" }}>Rating</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    books.map((value, key) => {
                                        // console.log(`Inside books map, value: ${value}`)
                                        return (
                                            <TableRow key={key}>
                                                <TableCell style={{ color: "white" }}> {value["bookTitle"]} </TableCell>
                                                <TableCell style={{ color: "white" }}>{value["author"]}</TableCell>
                                                <TableCell style={{ color: "white" }}>{value["category"]}</TableCell>
                                                <TableCell style={{ color: "white" }}>
                                                    {value["rating"]}
                                                    <DeleteIcon
                                                        onClick={() => handleBookDelete(value["bookId"])}
                                                        className={classes.deleteIconStyle} />
                                                    <EditIcon onClick={() => handleBookEdit(value)} className={classes.editIconStyle} />
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Grid>
        </div>
    )
}
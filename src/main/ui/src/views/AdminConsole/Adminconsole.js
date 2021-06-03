import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, makeStyles, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../viewStyles';
import Swal from 'sweetalert2';
import { deleteBook } from '../../redux/books';

const useStyles = makeStyles(styles);

export default function AdminConsole() {
    const classes = useStyles();

    const books = useSelector(state => state.books.books);
    const dispatch = useDispatch();

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

        // const sendData = async () => {
        //     const response = await fetch('/book', {
        //         method: "DELETE",
        //         body: JSON.stringify({
        //             bookId: bookId
        //         }),
        //         mode: 'cors',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },

        //     });

        //     if(response.ok){
        //         alert("deleted successfully");
        //     }
        // }
        // sendData()

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
    }
    return (
        <div>
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

                                        return (
                                            <TableRow key={key}>
                                                <TableCell style={{ color: "white" }}> {value["bookTitle"]} </TableCell>
                                                <TableCell style={{ color: "white" }}>{value["author"]}</TableCell>
                                                <TableCell style={{ color: "white" }}>{value["category"]}</TableCell>
                                                <TableCell style={{ color: "white" }}>
                                                    {value["rating"]}
                                                    <DeleteIcon
                                                        onClick={(event) => handleBookDelete(value["bookId"])}
                                                        className={classes.deleteIconStyle} />
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
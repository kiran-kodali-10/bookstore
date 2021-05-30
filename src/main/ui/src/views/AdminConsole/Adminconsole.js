import { Button, Grid, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const buttonStyle = {
    backgroundColor: "#7e3ff2",
    color: "#000",
    marginTop: "20px",
    '&:hover': {
        backgroundColor: "#7e3ff290"
    }
}
const modalStyle = {
    top: "30%",
    left: "30%",
    height: "400px",
    width: "600px",
    backgroundColor: "white",
}

export default function AdminConsole(props) {
    const [books, setBooks] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const getBooks = () => {
            fetch('/books')
                .then(response => response.json())
                .then(data => setBooks(data))
                .catch(error => console.log(error));
        }

        getBooks();
    }, [])

    const handleModalClose = () => {
        setOpen(!open);
    }

    return (
        <div>
            <Grid
                container
                justify="center"
            >
                <Grid
                    item

                >
                    <Button onClick={() => setOpen(!open)} style={buttonStyle}>Add Book</Button>
                    <Modal
                        open={open}
                        onClose={handleModalClose}
                        style={modalStyle}
                    >
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "20px 50px" }}>
                            <label htmlFor="title">
                                Book Title
                            </label>
                            <input type="text" placeholder="enter the book title" />
                            <label htmlFor="bookName">
                                Book Name
                            </label>
                            <input type="text" placeholder="enter the book title" />
                            <label htmlFor="bookAuthor">
                                Author
                            </label>
                            <input type="text" placeholder="enter the book title" />
                            <label htmlFor="bookAuthor">
                                rating
                            </label>
                            <input type="number" min="0" max="5" placeholder="enter the book title" />
                            <label htmlFor="bookAuthor">
                                Category
                            </label>
                            <input type="text" placeholder="enter the book title" />
                            <Button style={buttonStyle}>Submit</Button>
                        </div>
                    </Modal>
                </Grid>
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
                                            <TableCell style={{ color: "white" }}>{value["rating"]}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

            </Grid>
        </div>
    )
}
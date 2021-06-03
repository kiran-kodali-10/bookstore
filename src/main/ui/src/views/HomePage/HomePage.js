import React, { useEffect, useState } from 'react';
import { Card, Grid, CardContent, makeStyles, Button } from '@material-ui/core';
import styles from '../viewStyles.js';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/books';
import { bookActions } from '../../redux/bookSlice';


const useStyles = makeStyles(styles);

export default function Home(props) {

    const classes = useStyles();

    // calling state from store
    const state = useSelector((state) => state.books);
    // const dispatch = useDispatch();

    //  Api call to fetch the books
    // useEffect(() => {
    //     dispatch(fetchBooks());

    // }, []);

    return (
        <Grid container alignItems="center" spacing={5}>
            {
                state.books.map((value, key) => {
                    return (
                        <Grid
                            item
                            key={key}
                            md={4}
                            sm={6}
                            xs={8}

                        >
                            <Card raised="true" className={classes.cardStyle}>
                                <CardContent>
                                    <h3>{value["bookTitle"]}</h3>
                                    <p> {value["author"]} </p>
                                    <p> {value["rating"]} </p>
                                    <Button className={classes.buttonStyle}>View</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}
import React from 'react';
import { Card, Grid, CardContent, makeStyles, Button } from '@material-ui/core';
import styles from '../viewStyles.js';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(styles);

export default function Home(props) {

    const classes = useStyles();

    // calling state from store
    const state = useSelector((state) => state.books);

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
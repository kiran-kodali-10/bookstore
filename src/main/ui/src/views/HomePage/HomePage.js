import React, { useEffect, useState } from 'react';
import {Card, Grid, CardContent, makeStyles, Button } from '@material-ui/core';
import styles  from './homePageStyle';

const useStyles = makeStyles(styles);

export default function Home(props) {

    const classes = useStyles();
    const [books, setBooks] = useState([]);
    //  Api call to fetch the books
    useEffect(
        () => {
            fetch('/books')
                .then(result => result.json())
                .then(data => setBooks(data))
                .catch(err => console.log(err))
        }, []);

    return (
        <Grid container  alignItems="center" spacing={5}>
            {
                books.map((value, key) => {
                    console.log(value);
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
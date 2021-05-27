import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Grid from '@material-ui/core/Grid';

export default function Home(props) {
    const arr = [0, 1, 2, 3, 4, 5];

    const [books, setBooks] = useState([]);
    //  Api call to fetch the books
    useEffect(
        () => {
            fetch('http://localhost:8080/books')
               .then(result => result.json())
               .then(data => setBooks(data))
                .catch(err => console.log(err))
        },[]);

    return (
        <Grid container justify="center">
            {
                books.map((value, key) => {
                    console.log(value);
                    return (
                        <Grid
                            item
                            key={key}
                            md={6}
                            sm={6}
                            xs={8}
                        >
                            <Card>
                                <h3>{value["bookTitle"]}</h3>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}
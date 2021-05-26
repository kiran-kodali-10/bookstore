import { Button, Grid, makeStyles, TextField, withStyles } from '@material-ui/core';
import React from 'react';
import styles from './loginStyle';

const useStyles = makeStyles(styles);

const CustomTextField = withStyles({
    root: {
        color: "white !important",
        marginBottom: "30px",
        borderColor: "white",

        '& label': {
            color: "#fff",
        },
        '& .MuiFilledInput-root': {
            background: "#333"
        },
        '& .MuiFormLabel-root': {
            color: "#fff",
        },
        '& .MuiInputBase-root': {
            color: '#fff'
        },
        '& .MuiInput-underline:before': {
            borderBottom: "2px solid #fff",
        }

    }
})(TextField);

function Login(props) {

    const classes = useStyles();



    return (
        <div
            className={classes.container}
        >
            <div className={classes.headerStyle}>
                <h1>Booksotre</h1>
            </div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.container}
            >


                <Grid
                    item
                    className={classes.gridItem}
                    md={8}
                    sm={10}
                    xs={12}
                >
                    <div
                        className={classes.card}
                    >
                        <h2 className={classes.loginFormHeading}>Sign In</h2>
                        <CustomTextField
                            id="username"
                            label="Username"
                            variant="filled"
                            placeholder="Enter your username"
                        />
                        <CustomTextField
                            id="password"
                            label="password"
                            variant="filled"
                            placeholder="Enter your password"
                            type="password"
                        />
                        <Button
                            color="primary"
                            variant="contained"
                            className={classes.buttonStyle}
                        >
                            Sign in
                        </Button>
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default Login
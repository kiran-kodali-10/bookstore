import { Button, Grid, makeStyles,  } from '@material-ui/core';
import React from 'react';
import styles from './loginStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextField';

const useStyles = makeStyles(styles);

function Login(props) {

    const classes = useStyles();

    return (
        <div
            className={classes.container}
        >
            {/* <div className={classes.headerStyle}>
                <h1>Booksotre</h1>
            </div> */}
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
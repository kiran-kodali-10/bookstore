import { Button, Grid, makeStyles, } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './loginStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextField';
import { config } from '../../config.js';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(styles);

function Login(props) {

    const classes = useStyles();

    // State variables for username and passwords
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successfulLogin, setSuccessfulLogin] = useState(false);

    const handleLoginSubmit = (event, username, password) => {
        event.preventDefault();
        console.log("Inside handle login submit")
        setSuccessfulLogin(true);
        let poolData = {
            UserPoolId: config.url.userPoolId,
            ClientId: config.url.clientId
        };

        let userPool = new CognitoUserPool(poolData);

        let userData = {
            Username: username,
            Pool: userPool
        };

        let authenticationData = {
            Username: username,
            Password: password
        };

        let authenticatitionDetails = new AuthenticationDetails(authenticationData);

        let cognitoUser = new CognitoUser(userData);
        console.log(cognitoUser)
        cognitoUser.authenticateUser(authenticatitionDetails, {
            onSuccess: (result) => {
                let accessToken = result.getAccessToken().getJwtToken();
                console.log(`access token: ${accessToken}`);
                // setSuccessfulLogin(true);
            },
            onFailure: (result) => {
                alert(result.message || JSON.stringify(result));
                setSuccessfulLogin(false);
            }
        })
    }



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
                    <form
                        className={classes.card}
                        onSubmit={(event) => handleLoginSubmit(event, username, password)}
                    >
                        <h2 className={classes.loginFormHeading}>Sign In</h2>
                        <CustomTextField
                            id="username"
                            label="Username"
                            variant="filled"
                            placeholder="Enter your username"
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        <CustomTextField
                            id="password"
                            label="password"
                            variant="filled"
                            placeholder="Enter your password"
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <Button
                            color="primary"
                            variant="contained"
                            className={classes.buttonStyle}
                            type="submit"
                        >
                            {successfulLogin && (<i className="fa fa-refresh fa-spin" />)}
                            {successfulLogin && (<span>Signing in ...</span>)}
                            {!successfulLogin && (<span>Sign in</span>)}

                        </Button>
                    </form>
                </Grid>
            </Grid>
            {/* {
                successfulLogin ? <Redirect to="/home" /> : null
            } */}
        </div>
    )
}

export default Login
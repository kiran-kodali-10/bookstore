import React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from '../assets/jss/adminStyles';
import routes from '../routes'
import { Route, Switch } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const useStyles = makeStyles(styles);

const switchRoutes = (
    <Switch>
        {
            routes.map((prop, key) => {
                console.log(prop.path)
                console.log(prop.component)
                return (
                    <Route
                        path={prop.path}
                        component={prop.component}
                        key={key}
                    />
                )
            })
        }
    </Switch>
);

export default function Admin(props) {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            {/* Navbar goes here */}
            <div className={classes.navbar}>
                <Navbar
                    routes={routes}
                />
            </div>
            <div className={classes.content}>
                {switchRoutes}
            </div>
        </div>
    )
}
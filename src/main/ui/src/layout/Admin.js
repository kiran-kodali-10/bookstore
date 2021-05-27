import React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from '../assets/jss/adminStyles';
import routes from '../routes'
import { Route, Switch } from 'react-router';

const useStyles = makeStyles(styles);

const switchRoutes = (
    <Switch>
        {
            routes.map((prop, key) => {
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

            </div>
            <div className={classes.content}>
                {switchRoutes}
            </div>
        </div>
    )
}
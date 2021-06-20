import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import styles from '../assets/jss/adminStyles';
import routes from '../routes'
import { Route, Switch } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import { fetchBooks } from '../redux/books';
import { useDispatch, useSelector } from 'react-redux';
import Notification from '../components/Notification/Notification';

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

    let notification = useSelector((state) => state.ui.notification);
    // const [dummy, setDummy] = useState(true)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <div>
            {notification.show ?
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
                :
                null

            }
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
        </div>
    )
}
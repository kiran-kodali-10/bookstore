import { AppBar, ListItem, ListItemText, makeStyles, Toolbar } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/jss/navbarStyles';

const useStyles = makeStyles(styles);

export default function Navbar(props) {

    const classes = useStyles();

    // Method to find out the active route
    const activeRoute = (route) =>{
        return window.location.href.indexOf(route) > -1 ? true : false
    } 

    return (
        <div>
            <AppBar elevation="15" className={classes.appBarStyle}>
                <Toolbar>
                    <h1 className={classes.flex} >Bookstore</h1>
                    <div className={classes.linkPlacement}>
                        {
                            props.routes.map((route, key) => {
                                const listItemClasses = classNames({
                                    [classes.linkStyle]: true,
                                    [classes.activeRoute]: activeRoute(route.path)
                                })
                                return (
                                    <Link
                                        to={route.path}
                                        key={key}
                                        className={classes.navLink}
                                    >
                                        <ListItem className={listItemClasses}>
                                            <ListItemText
                                                primary={route.name}
                                                className={classes.textStyle}
                                            />
                                        </ListItem>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )

}
import { AppBar, ListItem, ListItemText, makeStyles, Toolbar } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <AppBar elevation={15} className={classes.appBarStyle}>
                <Toolbar>
                    <h1 className={classes.flex} >Bookstore</h1>
                    <div className={classes.linkPlacement}>
                        {
                            props.routes.map((route, key) => {
                                console.log(route.path)
                                const listItemClasses = classNames({
                                    [classes.linkStyle]: true,
                                    [classes.activeRoute]: activeRoute(route.path)
                                })
                                return (
                                    <NavLink
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
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )

}
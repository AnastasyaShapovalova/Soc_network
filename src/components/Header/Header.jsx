import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://lh3.googleusercontent.com/proxy/TKGCtSBl5ezavqMX0jBf7Bf-1v0Q-JIyq8VYExgK5hdZEoam1HlCJ7kpli-QFb2VMmUPYEKaME3y9ZN-3rcJHc11qbbVzzIGrMT6LSkPu0jh2doKsnPD5Q' />
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login
                :<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;
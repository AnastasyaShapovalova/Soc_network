import React from 'react';
import classes from './Navbar.module.css';

// let classes = {
//     'nav': 'Navbar_nav__1JoxC',
//     'item': 'Navbar_item__2659i',
//     'active': 'Basdkfk_actine'


let c1 = "item";
let c2 = "active";
let classesNew = `${classes.item} ${c2} `;

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className= {`${classes.item} ${classes.active}`}>
                <a>Profile</a>
            </div>
            <div className={classes.item}>
                <a>Messages</a>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Setting</a>
            </div>
        </nav>
    )
}

export default Navbar;
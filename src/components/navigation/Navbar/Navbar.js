import React from 'react';
import classes from  "./Navbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems"
const navbar = (props) => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.Brandname}>
               <h1>Restaurayus</h1> 
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default navbar;
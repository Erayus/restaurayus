import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem"
const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Home</NavigationItem>
            <NavigationItem link="/">Cart</NavigationItem>
        </ul>
    )
}

export default NavigationItems;
import React from "react";
import classes from "./NavbarStyles.module.css";
import logo from "../../Photos/LogoType.jpg";

export const NavBar = () => {
    return (
        <div className={classes.content}>
            <img height="75px" width="75px"
                src={logo}/>
            <div className={classes.title}>
                <p>Johanna</p>
                <p>Johanna</p>
                <p>Johanna</p>
            </div>
        </div>
    );
}
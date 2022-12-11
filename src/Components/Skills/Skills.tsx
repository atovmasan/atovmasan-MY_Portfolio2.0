import React from "react";
import classes from "./SkillsStyles.module.css";

export const Skills = () => {
    return (
        <div className={classes.content}>
            <h1>Skills</h1>
            <div className={classes.skills}>
                <div className={classes.threeD}>
                    <h2>3D</h2>
                    <p>Elouise</p>
                    <p>Elouise</p>
                    <p>Elouise</p>
                    <p>Elouise</p>
                </div>
                <div className={classes.twoD}>
                    <h2>2D</h2>
                    <p>Elouise</p>
                    <p>Elouise</p>
                </div>
            </div>
        </div>
    );
};
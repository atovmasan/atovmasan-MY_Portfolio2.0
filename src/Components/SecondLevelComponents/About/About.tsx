import React from "react"
import classes from "./AboutStyles.module.css"

export const About = () => {
    return (
        <div className={classes.content}>
            <div className={classes.main}>
                <img width="350px" src="https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg" />
                <h1>Forward Optimization Designer</h1>
                <p>Cochonnerie de bout d'crisse de saint-ciboire de gériboire de maudit
                    d'étole de saintes fesses de verrat de sacrament
                    de crucifix de batèche de calvinouche.
                </p>
                <h3>Like</h3>
            </div>
            <div className={classes.references}>
                <h2>References</h2>
                <div className={classes.images}>
                    <div className={classes.ref}>
                        <img width="350px" src="https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg" />
                        <p>Product</p>
                    </div>
                    <div className={classes.ref}>
                        <img width="150px" src="https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg" />
                        <p>Product</p>
                    </div>
                    <div className={classes.ref}>
                        <img width="200px" src="https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg" />
                        <p>Product</p>
                    </div>
                    <div className={classes.ref}>
                        <img width="450px" src="https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg" />
                    </div>
                    <div className={classes.ref}>
                        <img width="500px" src="https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg" />
                        <p>Product</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
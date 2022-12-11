import React from "react";
import classes from "./ContentStyles.module.css";
import { Post } from "./Posts/Post.tsx";

export const Content = () => {
  return (
    <div className={classes.content}>
      <Post />
    </div>
  );
};

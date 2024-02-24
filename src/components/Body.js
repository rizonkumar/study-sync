import React from "react";
import "./Body.module.css";
const Body = () => {
  return (
    <div className={classes.content}>
      <section className={classes.mainSection}>
        <div className={classes.contentLeft}>
          <p className={classes.sectionLabel}></p>
          <h1></h1>
        </div>
        <div className={classes.contentRight}></div>
      </section>
    </div>
  );
};

export default Body;

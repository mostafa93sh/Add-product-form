import React, { Fragment } from "react";
import "./Card.css";

function Card({ children }) {
  return (
    <Fragment>
      <section className='card-style'>{children}</section>
    </Fragment>
  );
}

export default Card;

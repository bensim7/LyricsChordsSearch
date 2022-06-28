import React, { useState, useContext } from "react";
import ReactContext from "../context/react-context";
// import Lyrics from "./Lyrics";

const Favorites = (props) => {
  const reactCtx = useContext(ReactContext);
  console.log(reactCtx.favorites);
  // console.log(props.favorites);
  return (
    <div className="centered">
      <h1>Favorites Page</h1>
      <br />
      <div>{reactCtx.favorites}</div>
    </div>
  );
};

export default Favorites;

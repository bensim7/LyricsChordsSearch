import React, { useState, useContext, useEffect, useRef } from "react";
import ReactContext from "../context/react-context";
import LyricsForm from "./LyricsForm";

const Favorites = (props) => {
  const storedFavorites = localStorage.getItem("favorite");
  // const storedFavorites = JSON.parse(localStorage.getItem("favorite"));

  const [favoriteDisplay, setFavoriteDisplay] = useState(storedFavorites);

  // useEffect(() => {
  //   setFavoriteDisplay(JSON.parse(localStorage.getItem("favorite")));
  // }, []);

  console.log(favoriteDisplay);
  let favoriteDisplayArr = favoriteDisplay.split(",");
  console.log(favoriteDisplayArr);

  let favDisplayArr = [];
  favDisplayArr = favoriteDisplayArr.shift();
  console.log(favDisplayArr);

  let favoriteDisplayList = favoriteDisplayArr.map((item) => {
    return (
      <li className="listBottomMargin">
        <span className="listSpanStyle">{item}</span>
      </li>
    );
  });
  console.log(favoriteDisplay);
  // console.log(favoriteDisplayArr);
  // console.log(favorites);
  return (
    <>
      <div>
        <h1 className="centered">Favorites Page</h1>
      </div>
      <div className="listCenter">
        <ol>{favoriteDisplayList}</ol>
      </div>
    </>
  );
};

export default Favorites;

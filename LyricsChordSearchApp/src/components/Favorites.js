import React, { useState, useContext, useEffect, useRef } from "react";
import ReactContext from "../context/react-context";
import LyricsForm from "./LyricsForm";

const Favorites = (props) => {
  // const reactCtx = useContext(ReactContext);
  // console.log(reactCtx.favorites);

  // const handleAddOneFavorite = (item) => {
  //   setFavorites(item);
  // };
  // setFavorites(item);

  // useEffect(() => {
  //   localStorage.setItem("favorite", favorites);
  // }, [favorites]);

  //////////////////////////////////////////////////////////////////////

  // Below is an infinite Loop with useState.
  // const [favoriteList, setFavoriteList] = useState([]);
  // setFavoriteList(localStorage.getItem("favorite"));

  // const addToFavoritesPage = localStorage.getItem("favorite");

  // const [favoriteList, setFavoriteList] = useState([]);

  // useEffect(() => {
  //   const handleAddFavoriteList = (favoriteDisplay) => {
  //     setFavoriteList((prevState) => {
  //       return [...prevState, favoriteDisplay];
  //     });
  //   };
  //   handleAddFavoriteList();
  // }, [favoriteDisplay]);

  //////////////////////////////////////////
  // props.handleAddFavorites is not a function error,
  // might be because of trying to send this function as a prop to a different page in the react router

  // const [favorites, setFavorites] = useState([]);

  // const handleAddFavorites = (item) => {
  //   setFavorites((prevState) => {
  //     return [...prevState, item];
  //   });
  // };

  ////////////////////////////////////////////////

  // useEffect(() => {
  //   localStorage.setItem("favorites", favorites);
  // }, [favorites]);

  const initialState = localStorage.getItem("favorite");

  const [favoriteDisplay, setFavoriteDisplay] = useState(initialState);

  // useEffect(() => {
  //   setFavoriteDisplay(JSON.parse(localStorage.getItem("favorite")));
  // }, []);

  // useEffect(() => {
  //   const favoriteLoad = localStorage.getItem("favorite");
  //   if (favoriteLoad) {
  //     setFavoriteDisplay(JSON.parse(favoriteLoad));
  //   }
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
      {/* <ReactContext.Provider value={handleAddFavorites}>
        <div className="hideComponent">
          <LyricsForm />
        </div>
      </ReactContext.Provider> */}
      <div>
        <h1 className="centered">Favorites Page</h1>

        {/* <div>{reactCtx.favorites}</div> */}
        {/* {localStorage.getItem("keyFavorites")} */}

        {/* <div className="hideComponent">
          <LyricsForm handleAddFavorites={handleAddFavorites} />
        </div> */}
      </div>
      <div className="listCenter">
        <ol>{favoriteDisplayList}</ol>
      </div>
    </>
  );
};

export default Favorites;

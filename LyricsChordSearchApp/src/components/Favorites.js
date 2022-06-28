import React, { useState, useContext, useEffect } from "react";
import ReactContext from "../context/react-context";
import LyricsForm from "./LyricsForm";

const Favorites = (props) => {
  // const reactCtx = useContext(ReactContext);
  // console.log(reactCtx.favorites);
  // console.log(props.favorites);
  // const [favorites, setFavorites] = useState([]);

  // const handleAddOneFavorite = (item) => {
  //   setFavorites(item);
  // };
  // setFavorites(item);

  // useEffect(() => {
  //   localStorage.setItem("favorite", favorites);
  // }, [favorites]);

  let favoriteDisplay = localStorage.getItem("favorite");

  console.log(favoriteDisplay);
  return (
    <>
      {/* <ReactContext.Provider value={{ handleAddOneFavorite }}>
        <div className="hideComponent">
          <LyricsForm />
        </div>
      </ReactContext.Provider> */}
      <div className="centered">
        <h1>Favorites Page</h1>
        <br />
        {/* <div>{reactCtx.favorites}</div> */}
        {/* {localStorage.getItem("keyFavorites")} */}

        {/* <div className="hideComponent">
          <LyricsForm handleAddOneFavorite={handleAddOneFavorite} />
        </div> */}
      </div>
      <div className="centered">{favoriteDisplay}</div>
    </>
  );
};

export default Favorites;

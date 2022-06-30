import React, { useContext, useState, useEffect } from "react";
// import ReactContext from "../context/react-context";

const LyricsForm = (props) => {
  // const reactCtx = useContext(ReactContext);

  const [validFieldsFavorites, setValidFieldsFavorites] = useState(false);
  useEffect(() => {
    setValidFieldsFavorites(
      (props.artistQuery !== "") & (props.songQuery !== "")
    );
  }, [props.artistQuery, props.songQuery]);

  const handleAddFavoritesButton = (event) => {
    event.preventDefault();
    if (validFieldsFavorites) {
      const newItem =
        props.artistQuery.toUpperCase() + " - " + props.songQuery.toUpperCase();
      props.handleAddFavorites(newItem);
    } else if (props.artistQuery === "" && props.songQuery === "") {
      alert("Fill in Artist name and song name to add (Favorites)");
    } else if (props.artistQuery === "") {
      alert("Fill in Artist name to add (Favorites)");
    } else if (props.songQuery === "") {
      alert("Fill in song name to add (Favorites)");
    }
  };
  return (
    <>
      <div className="row">
        <h1 className="centered">Lyrics Search Page</h1>
      </div>
      <div className="centered">
        <form onSubmit={props.handleSubmit}>
          <div className="row">
            <div className="col-md-5  ">
              <label htmlFor="artistQuery">Search Here : </label>
            </div>
            <div className="col-md-7">
              <input
                id="artistQuery"
                value={props.artistQuery}
                onChange={props.handleArtistInput}
                // ref={props.artistQueryRef}
                type="text"
                placeholder="Enter Artist Name Here"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="songQuery"></label>
            </div>
            <div className="col-md-7">
              <input
                id="songQuery"
                value={props.songQuery}
                onChange={props.handleSongInput}
                // ref={props.songQueryRef}
                type="text"
                placeholder="Enter Song Name Here"
              />
            </div>
          </div>

          <br />
          <div className="row">
            <div className="col-md-5">
              {props.validFields
                ? " *All inputs filled"
                : " *Please fill all the input fields"}
            </div>
            <div className="col-md-7">
              <button type="Submit">Submit</button>

              <button type="submit" onClick={handleAddFavoritesButton}>
                Save To Favorites
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LyricsForm;

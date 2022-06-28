import React from "react";

const LyricsForm = (props) => {
  const handleAddFavoritesButton = (event) => {
    event.preventDefault();

    const newItem = props.artistQuery + props.songQuery;
    props.handleAddFavorites(newItem);
  };
  return (
    <>
      <div className="row">
        <h1 className="centered">Lyrics Search Page</h1>
      </div>
      <div className="centered">
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="artistQuery">Search Here: </label>
          <input
            id="artistQuery"
            value={props.artistQuery}
            onChange={props.handleArtistInput}
            // ref={props.artistQueryRef}
            type="text"
            placeholder="Enter Artist Name Here"
          />
          <label htmlFor="songQuery"></label>
          <input
            id="songQuery"
            value={props.songQuery}
            onChange={props.handleSongInput}
            // ref={props.songQueryRef}
            type="text"
            placeholder="Enter Song Name Here"
          />

          <button type="Submit">Submit</button>
          <button type="submit" onClick={handleAddFavoritesButton}>
            Favorite
          </button>
          {props.validFields
            ? " *All inputs filled"
            : " *Please fill all the input fields"}
        </form>
      </div>
    </>
  );
};

export default LyricsForm;

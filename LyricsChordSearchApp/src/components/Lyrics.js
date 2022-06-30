import React, { useState, useRef, useEffect, useContext } from "react";
import LyricsForm from "./LyricsForm";
import LyricsResults from "./LyricsResults";
import Favorites from "./Favorites";
import ReactContext from "../context/react-context";

const Lyrics = (props) => {
  const [artistQuery, setArtistQuery] = useState("");
  const [songQuery, setSongQuery] = useState("");
  // const artistQueryRef = useRef();
  // const songQueryRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lyrics, setLyrics] = useState("");
  const [validFields, setValidFields] = useState(false);
  const [showResults, setShowResults] = useState(false);
  // const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  /////////////////////////////////////
  // local storage
  ////////////////////////////////////
  // const handleAddFavorites = (item) => {
  //   setFavorites((prevState) => {
  //     return [...prevState, item];
  //   });
  // };

  // const handleAddFavorites = (item) => {
  //   setFavorites(item);
  // };

  // useEffect(() => {
  //   localStorage.setItem("favorite", favorites);
  // }, [favorites]);

  //////////////////////////////////////////////////////////////////////

  const fetchLyrics = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        throw new Error(
          "Something went wrong. Please check if all input fields are filled correctly"
        );
      }

      const data = await res.json();
      setLyrics(data.lyrics);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  // console.log(lyrics);
  // console.log(lyrics.replaceAll("\n", "<br/>"));

  // let lyricsDisplayed = lyrics.replace(/(\r\n|\r|\n)/g, "<br />");

  let lyricsDisplayed = lyrics.toString().split("\n");
  console.log(lyricsDisplayed);

  const handleArtistInput = (event) => {
    setArtistQuery(event.target.value);
  };

  const handleSongInput = (event) => {
    setSongQuery(event.target.value);
  };

  //////////////////////////////////////////////////////
  // Submit Function
  ////////////////////////////////////////////////////////

  // let artistQuery = "";
  // let songQuery = "";
  useEffect(() => {
    setValidFields(artistQuery !== "" && songQuery !== "");
  }, [artistQuery, songQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // setArtistQuery(artistQueryRef.current.value);
    // setSongQuery(songQueryRef.current.value);

    // const artistQuery = artistQueryRef.current.value;
    // const songQuery = songQueryRef.current.value;
    if (validFields) {
      setShowResults(true);
      const url = "https://api.lyrics.ovh/v1/" + artistQuery + "/" + songQuery;
      fetchLyrics(url);
      // handleAddFavorites(url);
    } else if (artistQuery === "" && songQuery === "") {
      alert("Artist name and Song name fields are not filled");
    } else if (artistQuery === "") {
      alert("Artist Field is not filled");
    } else if (songQuery === "") {
      alert("Song name is not filled");
    }
  };

  const handleGoBackToSearch = () => {
    setShowResults(false);
  };

  // console.log(artistQuery);
  // console.log(songQuery);

  return (
    <>
      {/* <ReactContext.Provider value={{ favorites, setFavorites }}>
        {showFavorites ? <Favorites /> : ""}
        <div className="hideComponent">
          <Favorites />
        </div>
      </ReactContext.Provider> */}
      {showResults ? (
        <LyricsResults
          lyrics={lyrics}
          lyricsDisplayed={lyricsDisplayed}
          error={error}
          isLoading={isLoading}
          artistQuery={artistQuery}
          songQuery={songQuery}
          handleGoBackToSearch={handleGoBackToSearch}
        />
      ) : (
        <LyricsForm
          handleSubmit={handleSubmit}
          // artistQueryRef={artistQueryRef}
          // songQueryRef={songQueryRef}
          artistQuery={artistQuery}
          handleArtistInput={handleArtistInput}
          songQuery={songQuery}
          handleSongInput={handleSongInput}
          validFields={validFields}
          handleAddFavorites={props.handleAddFavorites}
        />
      )}
      {/* <h2 className="centered">
        {artistQuery} {songQuery}
      </h2>
      <div className="centered">
        <p>{content}</p>
      </div> */}
      {/* <div className="hideComponent">
        <Favorites favorites={favorites} />
      </div> */}
    </>
  );
};

export default Lyrics;

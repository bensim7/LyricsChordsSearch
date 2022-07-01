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
  // local storage - Moved to App.js
  ////////////////////////////////////
  // const handleAddFavorites = (item) => {
  //   setFavorites((prevState) => {
  //     return [...prevState, item];
  //   });
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

  useEffect(() => {
    setValidFields(artistQuery !== "" && songQuery !== "");
  }, [artistQuery, songQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validFields) {
      setShowResults(true);
      const url = "https://api.lyrics.ovh/v1/" + artistQuery + "/" + songQuery;
      fetchLyrics(url);
    } else if (artistQuery === "" && songQuery === "") {
      alert("Fill in Artist name and song name to (Submit)");
    } else if (artistQuery === "") {
      alert("Fill in Artist name to (Submit)");
    } else if (songQuery === "") {
      alert("Fill in song name to (Submit)");
    }
  };

  const handleGoBackToSearch = () => {
    setShowResults(false);
  };

  return (
    <>
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
          artistQuery={artistQuery}
          handleArtistInput={handleArtistInput}
          songQuery={songQuery}
          handleSongInput={handleSongInput}
          validFields={validFields}
          handleAddFavorites={props.handleAddFavorites}
        />
      )}
    </>
  );
};

export default Lyrics;

import React, { useState, useRef, useEffect } from "react";
import LyricsForm from "./LyricsForm";
import LyricsResults from "./LyricsResults";
const Lyrics = () => {
  const [artistQuery, setArtistQuery] = useState("");
  const [songQuery, setSongQuery] = useState("");
  // const artistQueryRef = useRef();
  // const songQueryRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lyrics, setLyrics] = useState("");
  const [validFields, setValidFields] = useState(false);
  const [showResults, setShowResults] = useState(false);

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
          // artistQueryRef={artistQueryRef}
          // songQueryRef={songQueryRef}
          artistQuery={artistQuery}
          handleArtistInput={handleArtistInput}
          songQuery={songQuery}
          handleSongInput={handleSongInput}
          validFields={validFields}
        />
      )}
      {/* <h2 className="centered">
        {artistQuery} {songQuery}
      </h2>
      <div className="centered">
        <p>{content}</p>
      </div> */}
    </>
  );
};

export default Lyrics;
import React, { useState, useEffect } from "react";
import ChordsForm from "./ChordsForm";
const Chords = () => {
  const [chordRootQuery, setChordRootQuery] = useState("");
  const [chordVariQuery, setChordVariQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chord, setChord] = useState("");
  const [fingerPlace, setFingerPlace] = useState("");
  const [consistOfNotes, setConsistOfNotes] = useState("");
  const [validFields, setValidFields] = useState("");

  const fetchChord = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();
      setChord(data[0].strings);
      setFingerPlace(data[0].fingering);
      setConsistOfNotes(data[0].tones);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  const handleRootNoteInput = (event) => {
    setChordRootQuery(event.target.value);
  };
  const handleVariInput = (event) => {
    setChordVariQuery(event.target.value);
  };

  useEffect(() => {
    setValidFields(chordRootQuery !== "");
  }, [chordRootQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validFields) {
      const url =
        "https://api.uberchord.com/v1/chords/" +
        chordRootQuery.toUpperCase() +
        "_" +
        chordVariQuery.toLowerCase();
      fetchChord(url);
    } else {
      alert("At least Chord Key is required to be filled");
    }
  };

  let content = "";
  if (chord) {
    content = (
      <div>
        <br />
        <p>Low E String ------- {chord} ------- High E String</p>
        <br />
        <p>Fingering for Chord: {fingerPlace}</p>
        <br />
        <p>Chord consists of these notes: </p>
        <p>{consistOfNotes}</p>
      </div>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>The searched chord is loading .. please wait</p>;
  }
  return (
    <>
      <ChordsForm
        handleSubmit={handleSubmit}
        chordRootQuery={chordRootQuery}
        handleRootNoteInput={handleRootNoteInput}
        chordVariQuery={chordVariQuery}
        handleVariInput={handleVariInput}
        validFields={validFields}
      />
      <div className="centered">{content}</div>
    </>
  );
};

export default Chords;

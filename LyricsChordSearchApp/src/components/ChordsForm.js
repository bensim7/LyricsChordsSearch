import React from "react";

const ChordsForm = (props) => {
  return (
    <>
      <div className="row">
        <h1 className="centered">Chords Search Page</h1>
      </div>
      <div className="centered">
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="chordRootQuery">Search Here:</label>
          <input
            id="chordRootQuery"
            value={props.chordRootQuery}
            onChange={props.handleRootNoteInput}
            type="text"
            placeholder="Enter Chord Key Here:"
          />
          <label htmlFor="chordVariQuery"></label>
          <input
            id="chordVariQuery"
            value={props.chordVariQuery}
            onChange={props.handleVariInput}
            type="text"
            placeholder="Enter Chord Variation Here. "
          />
          <button type="Submit">Submit</button>
          {props.validFields
            ? "  *Key Filled, Variation is optional"
            : "  *Please fill the Chord Key Field"}
        </form>
      </div>
    </>
  );
};

export default ChordsForm;

import React from "react";

const ChordsForm = (props) => {
  return (
    <>
      <div className="row">
        <h1 className="centered">Chords Search Page</h1>
      </div>
      <div className="centered">
        <form onSubmit={props.handleSubmit}>
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="chordRootQuery">Search Here:</label>
            </div>
            <div className="col-md-7">
              <input
                id="chordRootQuery"
                value={props.chordRootQuery}
                onChange={props.handleRootNoteInput}
                type="text"
                placeholder="Enter Chord Key"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="chordVariQuery"></label>
            </div>
            <div className="col-md-7">
              <input
                id="chordVariQuery"
                value={props.chordVariQuery}
                onChange={props.handleVariInput}
                type="text"
                placeholder="Enter Chord Variation: "
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-5">
              {props.validFields
                ? "  *Key Filled, Variation is optional"
                : "  *Please fill the Chord Key Field"}
            </div>
            <div className="col-md-7">
              <button type="Submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChordsForm;

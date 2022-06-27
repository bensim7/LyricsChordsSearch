import React from "react";

const LyricsResults = (props) => {
  let content = "";
  if (props.lyrics) {
    // content = <div>{props.lyricsDisplayed}</div>;
    content = props.lyricsDisplayed.map((item) => {
      return (
        <span>
          {item} <br />
        </span>
      );
    });
  }

  if (props.error) {
    content = <p>{props.error}</p>;
  }

  if (props.isLoading) {
    content = <p>The searched song lyrics are loading .. please wait</p>;
  }
  return (
    <div>
      <button className="centered" onClick={props.handleGoBackToSearch}>
        Go Back To Search Page
      </button>
      <h2 className="centered">
        {props.artistQuery} {props.songQuery}
      </h2>
      <div className="centered">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default LyricsResults;

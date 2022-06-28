import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Lyrics from "./components/Lyrics";
import Chords from "./components/Chords";
import Favorites from "./components/Favorites";
function App() {
  return (
    <div className="container">
      <div className="siteHeader">
        <h1>Lyrics and Chord Search</h1>
      </div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Main" />} />
          {/* <Route exact path="/" element={<Navigate replace to="/" />} /> */}
          <Route path="/Main" element={<Main />} />
          <Route path="/Lyrics" element={<Lyrics />} />
          <Route path="/Chords" element={<Chords />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

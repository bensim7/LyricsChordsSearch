import React, { useState, useEffect } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Lyrics from "./components/Lyrics";
import Chords from "./components/Chords";
import Favorites from "./components/Favorites";

const initialState = [
  localStorage.getItem("favorite") ? localStorage.getItem("favorite") : [],
];
function App() {
  const [favorites, setFavorites] = useState(initialState);

  const handleAddFavorites = (item) => {
    setFavorites((prevState) => {
      return [...prevState, item];
    });
  };

  useEffect(() => {
    localStorage.setItem("favorite", favorites);
    //  localStorage.setItem("favorite", JSON.stringify(favorites))
  }, [favorites]);

  return (
    <div className="container-md">
      <div className="siteHeader">
        <h1>Lyrics and Chords Search</h1>
      </div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Main" />} />

          <Route path="/Main" element={<Main />} />
          <Route
            path="/Lyrics"
            element={<Lyrics handleAddFavorites={handleAddFavorites} />}
          />
          <Route path="/Chords" element={<Chords />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

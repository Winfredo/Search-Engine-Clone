import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Results from "./components/Results";
import SearchResults from "./components/SearchResults";
import ImageResults from "./components/ImageResults";
import VideoResults from "./components/VideoResults";
import "./App.css";
import ResultsContextProvider from "./contexts/ResultsContextProvider";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <div className={`container ${darkTheme ? "dark" : ""}`}>
      <BrowserRouter>
        <ResultsContextProvider>
          <Navbar toggleTheme={toggleTheme} dark={darkTheme} />

          <Routes>
            <Route path="/" element={<Results dark={darkTheme} />}>
            <Route index element={<SearchResults />} />
            <Route path="/images" element={<ImageResults />} />
            <Route path="/videos" element={<VideoResults />} />
            </Route>
            {/* <Route path="*" element={<h2>404 Not Found</h2>} /> */}
          </Routes>

          <Footer dark={darkTheme} />
        </ResultsContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;


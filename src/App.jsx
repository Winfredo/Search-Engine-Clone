import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./components/Results";
import SearchResults from "./components/SearchResults";
import ImageResults from "./components/ImageResults";
import VideoResults from "./components/VideoResults";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import ResultsContextProvider from "./contexts/ResultsContextProvider";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <div className={darkTheme ? "dark" : "light"}>
      <BrowserRouter>
        <ResultsContextProvider>
          <Routes>
            <Route
              path="/"
              element={<Results dark={darkTheme} toggleTheme={toggleTheme} />}
            >
              <Route index element={<SearchResults dark={darkTheme} />} />
              <Route
                path="/images"
                element={<ImageResults dark={darkTheme} />}
              />
              <Route path="/videos" element={<VideoResults />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ResultsContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

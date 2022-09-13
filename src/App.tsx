import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css";
import Work from "./views/work";
import About from "./views/about";
import Home from "./views/home";

function App() {
  const links = ["home", "about", "work"];
  return (
    <div className="App">
      <div>
        <nav>
          <h1>テスト用ホームページ</h1>
          <div className="menubar">
            {links.map((ln) => (
              <div>
                <a href={`/${ln}`}>{ln.toUpperCase()}</a>
              </div>
            ))}
          </div>
        </nav>
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

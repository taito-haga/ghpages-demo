import { Link, Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Work from "./views/work";
import About from "./views/about";
import Home from "./views/home";

const BASENAME = process.env.NODE_ENV === "development" ? "/" : "/ghpages-demo";

const Website = () => {
  const links = ["home", "about", "work"];
  return (
    <div className="App">
      <div>
        <nav>
          <h1>テスト用ホームページ</h1>
          <div className="menubar">
            {links.map((ln) => (
              <div>
                <Link to={`/${ln}`}>{ln.toUpperCase()}</Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  console.log(process.env);
  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<Website />}>
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

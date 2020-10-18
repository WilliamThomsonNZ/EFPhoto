import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { UI } from "./components/UI";
import "./App.css";
import IntroAnimation from "./components/IntroAnimation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Album from "./components/Album";
// import AlbumContext from "./contexts/AlbumContext";

function App() {
  const [count, setCount] = useState(0);
  const [ui, setUi] = useState(UI[count]);
  const [album, setAlbum] = useState({});
  return (
    // <AlbumContext.provider value={{ album, setAlbum }}>
    <div className="background" style={{ backgroundImage: `url(${ui.bg})` }}>
      {/* <IntroAnimation /> */}
      <div className="overlay">
        <Header />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Main ui={ui} setUi={setUi} setCount={setCount} count={count} />
              )}
            />
            <Route
              exact
              path="/album"
              render={() => <Album albumType={album} />}
            />
          </Switch>
        </Router>
      </div>
    </div>
    // </AlbumContext.provider>
  );
}

export default App;

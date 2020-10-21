import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { UI } from "./components/UI";
import "./App.css";
import IntroAnimation from "./components/IntroAnimation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Album from "./components/Album";
import AlbumContext from "./contexts/AlbumContext";
import { useLocalStorage } from "./components/useLocalStorage";

function App() {
  const [count, setCount] = useState(0);
  const [ui, setUi] = useState(UI[count]);
  const [album, setAlbum] = useLocalStorage({ id: "surf" }, "album");
  const [albumActive, setAlbumActive] = useState(false);

  const handleAlbumChange = (value) => {
    setAlbum(value);
    setAlbumActive((prevState) => !prevState);
  };

  const bgIMG = { backgroundImage: `url(${ui.bg})`, height: "100vh" };
  const bgColor = { backgroundColor: ui.bgC, height: "200vh" };
  return (
    <div className="background" style={!albumActive ? bgIMG : bgColor}>
      {/* <IntroAnimation /> */}
      <div className={!albumActive ? "overlay" : null}>
        <Header />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Main
                  uiProp={{ ui, setUi }}
                  countProp={{ count, setCount }}
                  album={album}
                  handleAlbumChange={handleAlbumChange}
                  albumActive={albumActive}
                  setAlbumActive={(value) => {
                    setAlbumActive(value);
                  }}
                />
              )}
            />
            <Route
              path="/album"
              render={() => <Album album={album} albumActive={albumActive} />}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

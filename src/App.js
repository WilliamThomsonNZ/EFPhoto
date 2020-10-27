import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { UI } from "./components/UI";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Album from "./components/Album";
import { useLocalStorage } from "./utils/useLocalStorage";
import { AnimatePresence } from "framer-motion";
import backgroundTexture from "./backgrounds/texture.png";
import IntroAnimation from "./components/IntroAnimation";

function App() {
  const [count, setCount] = useState(0);
  const [ui, setUi] = useState(UI[count]);
  const [album, setAlbum] = useLocalStorage({ id: "surf" }, "album");
  const [albumActive, setAlbumActive] = useLocalStorage(false, "albumActive");

  const handleAlbumChange = (value) => {
    setAlbum(value);
    setAlbumActive((prevState) => !prevState);
  };

  const bgAlbum = {
    backgroundColor: ui.bgC,
    backgroundImage: `url(${backgroundTexture})`,
    height: "200vh",
    overflowX: "hidden",
    overflowY: "show",
  };
  const bgMain = {
    backgroundColor: ui.bgC,
    backgroundImage: `url(${backgroundTexture})`,
    height: "100vh",
    overflowX: "hidden",
    overflowY: "hidden",
  };

  const location = useLocation();
  return (
    <div className="background" style={!albumActive ? bgMain : bgAlbum}>
      {" "}
      <IntroAnimation />
      <Header />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.key}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;

import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.css";
import { Header } from "./header";
import { Gallery } from "./gallery";
import { GalleryItem } from "./gallery-item";

export const GalleryContext = createContext({
  selectedImages: [],
  setSelectedImages: () => {},
});

export function App() {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const value = { selectedImages, setSelectedImages, images };

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Router>
      <GalleryContext.Provider value={value}>
        <div className="app container">
          <Header />
          <div className="main">
            <Switch>
              <Route path="/item/:id" component={GalleryItem} />
              <Route path="/" component={Gallery} />
            </Switch>
          </div>
        </div>
      </GalleryContext.Provider>
    </Router>
  );
}

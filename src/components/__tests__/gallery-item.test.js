import { render, screen } from "@testing-library/react";
import { GalleryItem } from "../gallery-item";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { GalleryContext } from "../app";
import { API_V2_LIST } from "./list-api-data";
const value = {
  selectedImages: [],
  images: API_V2_LIST,
};

// Setup mock
beforeEach(() => {});
// Cleanup mock
afterEach(() => {});

describe("GalleryItem", () => {
  it("should render correctly", () => {
    const history = createMemoryHistory();
    const route = "/10";
    history.push(route);

    render(
      <GalleryContext.Provider value={value}>
        <Router history={history}>
          <GalleryItem />
        </Router>
      </GalleryContext.Provider>
    );
  });
});

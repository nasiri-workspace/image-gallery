import { render, fireEvent } from "@testing-library/react";
import { GalleryContext } from "../app";
import { Router } from "react-router-dom";
import { Gallery } from "../gallery";
import { API_V2_LIST } from "./list-api-data";
import { createMemoryHistory } from "history";
const value = {
  selectedImages: [],
  images: API_V2_LIST,
};

describe("Gallery", () => {
  it("should render correctly", () => {
    const history = createMemoryHistory();
    const route = "/";
    history.push(route);
    render(
      <GalleryContext.Provider value={value}>
        <Router history={history}>
          <Gallery />
        </Router>
      </GalleryContext.Provider>
    );
  });
  /* 
  it("should toggle selected image by click", () => {
    const history = createMemoryHistory();
    const route = "/";
    history.push(route);

    const { container } = render(
      <GalleryContext.Provider value={value}>
        <Router history={history}>
          <Gallery />
        </Router>
      </GalleryContext.Provider>
    );
    fireEvent.click(container);
    expect(container).toBeChecked();
  }); */
});
organize unit-testing and add more coverage 

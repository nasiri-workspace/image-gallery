import React from "react";
import ReactDOM from "react-dom";

import { App } from "../components/App";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render with App and root div", () => {
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);

    // require index.js so that react-dom render method is called
    require("../index.js");
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      root
    );
  });
});

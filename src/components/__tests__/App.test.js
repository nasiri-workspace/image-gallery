import { render } from "@testing-library/react";
import { App } from "../App";

beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = jest.fn();
});

describe("App", () => {
  it("should render correctly", () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );
    render(<App />);
  });

  it("handle fetch failure", () => {
    jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.reject({
        error: "Some errors",
      });
    });
    render(<App />);
  });
});

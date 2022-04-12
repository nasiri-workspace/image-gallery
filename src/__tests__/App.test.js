import { render } from "@testing-library/react";
import { App } from "../components/App";

const original = console.error;

beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = original;
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
        error: "Some error",
      });
    });
    render(<App />);
  });
});

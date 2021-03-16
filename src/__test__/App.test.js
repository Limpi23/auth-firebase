import React from "react";
import App from "../components/App";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import { shallow } from "enzyme";

describe("rendering components", () => {
  it("rendering App component without crashing", () => {
    shallow(<App />);
  });
  it("renders Dashboard component without crashing", () => {
    shallow(<Dashboard />);
  });
  it("renders Dashboard component without crashing", () => {
    shallow(<Login />);
  });
});

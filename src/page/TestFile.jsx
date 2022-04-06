import React, { Component } from "react";
import Add from "./components/Add";

class TestFile extends Component {
  render() {
    return (
      <div className="TestFile">
        <header className="TestFile-header">
          <Add />
        </header>
      </div>
    );
  }
}
export default TestFile;

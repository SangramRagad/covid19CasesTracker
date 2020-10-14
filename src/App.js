import React from "react";
import "./App.css";
import DataList from "./component/DataList";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <DataList />
    </div>
  );
};

export default App;

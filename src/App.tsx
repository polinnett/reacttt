import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <>
      <Navbar />
      <MainRouter />
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import { UniversityTable } from "./Components/UniversityTable";
import {Navbar} from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <UniversityTable />
    </>
  );
}

export default App;

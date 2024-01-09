import React from "react";
import "./App.css";
import { UniversityTable } from "./Components/UniversityTable";
import { Navbar } from "./Components/Navbar";
import { Form } from "./Components/Form";

function App() {
  return (
    <>
      <Navbar />
      <Form />
      <UniversityTable />
    </>
  );
}

export default App;

import "./App.css";
import React from "react";
import PersonCard from "./PersonCard";
function App() {
  return (
    <div className="App">
      <PersonCard name={"Raghad Abu rahma"} age={18} haircolor={"white"} />
      <PersonCard name={"Mohammad Tabakhna"} age={48} haircolor={"Black"} />
      <PersonCard name={"Shatha Bast"} age={20} haircolor={"Golden"} />
      <PersonCard name={"Muath Ademar"} age={33} haircolor={"Blue"} />
    </div>
  );
}

export default App;

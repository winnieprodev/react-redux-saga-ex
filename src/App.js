import React, { Component } from 'react';
import { useSelector } from "react-redux";
import Counter from "./Counter";

function App() {
  const count = useSelector(state => state.counter.count);
  const voters = [
    "James Cao",
    "Bob Smith",
    "Stephen Reck",
    "Kevin Jakub"
  ];

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Redux made easy</h1>
      <h2>The count: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}

export default App;
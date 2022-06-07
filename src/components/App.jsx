import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [nameDisplay, setNameDisplay] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setNameDisplay(name);
  }

  return (
    <div className="container">
      <h1>Hello {nameDisplay}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;

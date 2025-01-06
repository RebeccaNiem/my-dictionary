import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="love" />
        </main>
        <br />
        <footer className="App-footer">
          coded by Rebecca N. It is open sourced on{" "}
          <a href="https://github.com/RebeccaNiem/my-dictionary">Github</a> and{" "}
          is hosted on <a href="https://trymydictionary.netlify.app/">Nelify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;

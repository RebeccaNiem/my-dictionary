import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <br />
        <footer className="App-footer">
          coded by Rebecca N. and hosted on{" "}
          <a href="https://trymydictionary.netlify.app/">Nelify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;

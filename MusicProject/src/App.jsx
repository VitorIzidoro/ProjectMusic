import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="hero">
      <div className="overlay">
        <h1>Essa é pra você</h1>
        <p>
          Cada nota dessa música carrega um pedaço do que eu sinto…
        </p>

        <audio controls className="player">
          <source src="/musica.mp3" type="audio/mpeg" />
        </audio>

        
      </div>
    </div>
  );
}
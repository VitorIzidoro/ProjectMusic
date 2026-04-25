import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="hero">
      <div className="particles"></div>

      {!started ? (
        <div className="intro">
          <h1>Eu fiz isso pra você</h1>
          <button onClick={() => setStarted(true)}>
            O que tem aqui… é só pra você!!
          </button>
        </div>
      ) : (
        <div className="content">
          <h1>Essa música é sua</h1>
          <p>
           Cada detalhe dessa música foi pensado em você…
em tudo que eu sinto, mas nem sempre consigo dizer.
          </p>

          <audio controls autoPlay className="player">
            <source src="/musica.mp3" type="audio/mpeg" />
          </audio>

          <span className="assinatura">com amor ❤️</span>
        </div>
      )}
    </div>
  );
}
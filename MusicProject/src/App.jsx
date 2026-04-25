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

          <div className="letra">
  <p>
    Você é a flor mais bela de todo o jardim<br />
    Beleza mais brilhante que o cheiro do jasmim<br />
    Seu sorriso é o sol, que ilumina o meu dia<br />
    É o brilho da estrela que sempre me guia<br />
    Seus olhos são lindos, profundos como o mar<br />
    Parecem o espaço onde eu vou me encontrar.
  </p>

  <p>
    Sem você o meu mundo acaba perdendo a cor<br />
    Fica o vazio e o silêncio da dor<br />
    Pois o seu carinho é o meu alimento<br />
    O refúgio que eu busco em todos os momentos<br />
    Você é como um lápis que sabe o caminho<br />
    Desenha o sorriso que eu não dou sozinho.
  </p>

  <p>
    E quando você chega, é a voz da melodia<br />
    O meu coração palpita de alegria<br />
    Seus abraços são águas plácidas e calmas<br />
    Onde eu encontro a paz de nossas almas.
  </p>

  <p>
    Mergulhei no teu oceano, encontrei minha paz<br />
    Teu carinho é o refúgio que me satisfaz<br />
    É a flor do meu jardim, a luz que me guia<br />
    Transformando meu silêncio em melodia<br />
    Meu amor por você não tem explicação<br />
    É a batida mais perfeita do meu coração.
  </p>

  <p>
    Minha alma se rendeu assim que te viu<br />
    O frio que eu sentia, você quem sumiu<br />
    Dizer que te amo é pouco, eu confesso<br />
    É muito mais do que as palavras podem expressar.
  </p>

  <p>
    Mergulhei no teu oceano, encontrei minha paz<br />
    Teu carinho é o refúgio que me satisfaz<br />
    É a flor do meu jardim, a luz que me guia<br />
    Transformando meu silêncio em melodia<br />
    Meu amor por você não tem explicação<br />
    É a batida mais perfeita do meu coração.
  </p>
</div>

          <span className="assinatura">Com Amor ❤️</span>
        </div>
      )}
    </div>
  );
}
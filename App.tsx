import { useState } from "react";
import "./App.css";

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [yesText, setYesText] = useState("Yes");

  const yesPhrases = [
    "YESS",
    "ABSOLUTELY",
    "I WOULD LOVE TO",
    "OF COURSE ❤️",
    "YES YES YES"
  ];

  const moveNoButton = (e: any) => {
    const button = e.target;

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    const randomText =
      yesPhrases[Math.floor(Math.random() * yesPhrases.length)];
    setYesText(randomText);
  };

  if (accepted) {
    return (
      <div className="container">
        <div className="card">
          <h1>Yesss! ❤️</h1>
          <img src="/Valgif.gif" alt="Celebration" className="gif"/>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Will you be my Valentine?</h1>

        <div className="buttons">
          <button className="yesBtn" onClick={() => setAccepted(true)}>
            {yesText}
          </button>

          <button className="noBtn" onMouseEnter={moveNoButton}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

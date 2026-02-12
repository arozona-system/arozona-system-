import React, { useState, useEffect } from 'react';

const randomId = () => Date.now().toString() + Math.random().toString(16).slice(2);

/* ----------------------------------------------------------
   MINI-JEU : DINO
---------------------------------------------------------- */
function DinoGame({ onRetry }) {
  const [dinoY, setDinoY] = useState(0);
  const [cactusX, setCactusX] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [speed, setSpeed] = useState(0.8);
  const [passed, setPassed] = useState(0);

  useEffect(() => {
    if (gameOver) return;

    let lastTime = performance.now();
    const loop = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      setCactusX((x) => {
        let nx = x - speed * (delta / 16);
        if (nx < -10) {
          nx = 100;
          setPassed((p) => {
            const next = p + 1;
            if (next % 3 === 0) setSpeed((s) => s + 0.2);
            return next;
          });
        }
        return nx;
      });

      if (cactusX < 20 && cactusX > 5 && dinoY < 25) {
        setGameOver(true);
      }

      if (!gameOver) requestAnimationFrame(loop);
    };

    const id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, [gameOver, cactusX, speed, dinoY]);

  const jump = () => {
    if (dinoY !== 0) return;
    setDinoY(60);
    setTimeout(() => setDinoY(0), 400);
  };

  return (
    <div className="screen center">
      <div className="icon-circle">🛡️</div>
      <h1 className="title accent">SÉCURITÉ : CODE ERRONÉ</h1>

      <div className="game-area">
        <div className="dino" style={{ bottom: `${dinoY}px` }}>🐇</div>
        <div className="cactus" style={{ left: `${cactusX}%` }}>🚽</div>
        <div className="ground" />
      </div>

      {!gameOver ? (
        <button className="btn primary big" onClick={jump}>SAUTER</button>
      ) : (
        <button className="btn primary big" onClick={onRetry}>RÉESSAYER LE CODE</button>
      )}
    </div>
  );
}

/* ----------------------------------------------------------
   ÉCRAN DE CODE PIN
---------------------------------------------------------- */
function PinScreen({ onSuccess, onWrong, onCreateAccount }) {
  const [pin, setPin] = useState('');

  const pressKey = (num) => {
    const current = pin + num;
    if (current === '1234') {
      setPin('');
      onSuccess();
    } else if (current.length >= 4) {
      setPin('');
      onWrong();
    } else {
      setPin(current);
    }
  };

  return (
    <div className="screen center">
      <div className="icon-circle">🛡️</div>
      <h1 className="title">Entrez votre code</h1>

      <div className="pin-display">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`dot ${pin.length > i ? 'dot-active' : ''}`} />
        ))}
      </div>

      <div className="numpad">
        {[1,2,3,4,5,6,7,8,9,0].map((n) => (
          <button key={n} className="key" onClick={() => pressKey(n.toString())}>{n}</button>
        ))}
      </div>

      <button className="btn secondary" onClick={onCreateAccount}>
        Créer un compte
      </button>
    </div>
  );
}

/* ----------------------------------------------------------
   MODALE
---------------------------------------------------------- */
function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------
   APP PRINCIPALE
---------------------------------------------------------- */
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [creatingAccount, setCreatingAccount] = useState(false);

  const handleWrongPin = () => setShowGame(true);
  const handleRetry = () => setShowGame(false);
  const handleSuccess = () => setIsLoggedIn(true);

  return (
    <>
      {/* Écran de création de compte */}


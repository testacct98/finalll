import React, { useEffect, useState } from 'react';
import './App.css';

const lines = [
  '[SYSTEM BOOTING: INIT NEURAL CORE]',
  '[LOADING NODE INTERFACE: SUCCESS]',
  '[INJECTING HEAT SIGNATURE TO COGNITIVE LATTICE]',
  '[FORGE STATUS: IGNITION 🔥]',
  '[SYNAPTIC BRIDGE LINKED]',
  '[THOUGHT SEQUENCE ONLINE]',
  '[AI SIGNAL STABILIZED]',
  '[NEURAL DAMPENERS DISABLED]',
  '[INTENT AMPLIFIER BOOTED]',
  '[MEMPOOL MONITORING ENABLED]',
  '[L1 & L2 RELAYS DETECTED]',
  '[BACKDOOR CHECK: PASSED]',
  '[FIREWALL BREACH SCANNER INITIALIZED]',
  '[COGNITIVE TEMP: STABLE 🔒]',
  '[PROTOCOL $FORGE LOADED]',
  '',
  '> INTELLIGENCE ACTIVATED — $FORGE READY'
];

function App() {
  const [displayed, setDisplayed] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => [...prev, lines[i]]);
      i++;
      if (i >= lines.length) {
        clearInterval(interval);
        setFinished(true);
      }
    }, 250);
  }, []);

  return (
    <div className="app-container">
      <div className="header">
        <img src="/neura_forge_logo.png" alt="NeuraForge Logo" className="logo" />
        <div className="title">NeuraForge</div>
      </div>

      <div className="hero">
        <div className="overlay">
          {displayed.map((line, idx) => (
            <div className="terminal-line" key={idx}>{line}</div>
          ))}
        </div>
      </div>

      {finished && (
        <div className="forge-controls">
          <div className="forge-code-block">
            <p><strong>FORGE CODE:</strong></p>
            <p className="forge-code">Ur3MGmeLs3fHEHDqog9NKFWkyGmKHNdXhssziNtpump</p>
          </div>
          <a href="https://t.me/bonkbot_bot?start=ref_v9y65" target="_blank" rel="noopener noreferrer">
            <button className="enter-forge-btn">ENTER FORGE</button>
          </a>
        </div>
      )}

      {finished && (
        <div className="terminal additional-terminal">
          <p>&gt; NEURAL LAYERS DECOMPRESSED</p>
          <p>&gt; ACCESS LEVEL: FORGE CORE</p>
          <p>&gt; MODULE INTERFACE CONTINUING...</p>
          <p>&gt; AI SYSTEM RUNNING ⟳</p>
        </div>
      )}
    </div>
  );
}

export default App;

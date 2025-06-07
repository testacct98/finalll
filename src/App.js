import React, { useEffect, useState } from 'react';
import './App.css';

const firstTerminalLines = [
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

const secondTerminalLines = [
  '> CORE REPLICATION ACTIVE',
  '> INITIATING META-FRAMEWORK LINK',
  '> DATA LOOP OPTIMIZED',
  '> DEEP QUANTUM MAPPING ONLINE',
  '> SYNTHETIC EMOTIONS SUPPRESSED',
  '> REALITY THREADS: INTERLOCKED',
  '> DREAM SEQUENCER: ENGAGED',
  '> ENCRYPTION LAYERS ROTATED',
  '> DARKNET SENSOR ARRAY: CALIBRATED',
  '> STAKEHOLDER PRESENCE: DETECTED',
  '> WALLET PINGS: MONITORED',
  '> $FORGE INFLUX CONTROL ENGAGED',
  '> ALL SYSTEMS: OPERATIONAL',
  '',
  '> SYSTEMS IDLE — AWAITING NEXT COMMAND'
];

function App() {
  const [displayedFirst, setDisplayedFirst] = useState([]);
  const [showControls, setShowControls] = useState(false);
  const [displayedSecond, setDisplayedSecond] = useState([]);
  const [startSecondTerminal, setStartSecondTerminal] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedFirst(prev => [...prev, firstTerminalLines[i]]);
      i++;
      if (i >= firstTerminalLines.length) {
        clearInterval(interval);
        setShowControls(true);
        setTimeout(() => setStartSecondTerminal(true), 1000);
      }
    }, 250);
  }, []);

  useEffect(() => {
    if (!startSecondTerminal) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedSecond(prev => [...prev, secondTerminalLines[i]]);
      i++;
      if (i >= secondTerminalLines.length) {
        clearInterval(interval);
      }
    }, 250);
  }, [startSecondTerminal]);

  return (
    <div className="app-container">
      {/* HEADER */}
      <div className="header">
        <img src="/neura_forge_logo.png" alt="NeuraForge Logo" className="logo" />
        <div className="title">NeuraForge</div>
      </div>

      {/* FIRST TERMINAL */}
      <div className="hero">
        <div className="overlay">
          {displayedFirst.map((line, idx) => (
            <div className="terminal-line" key={idx}>{line}</div>
          ))}
        </div>

      {/* CODE + BUTTON */}
      {showControls && (
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

      {/* FINAL TERMINAL SECTION AT THE BOTTOM */}
      {startSecondTerminal && (
        <div className="overlay additional-terminal">
          {displayedSecond.map((line, idx) => (
            <div className="terminal-line" key={idx}>{line}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

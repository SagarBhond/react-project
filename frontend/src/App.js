import React, { useEffect, useState } from 'react';

export default function App() {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    fetch('/api/hello')
      .then(r => r.json())
      .then(d => setMsg(d.message))
      .catch(() => setMsg('Could not reach API'));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 24 }}>
      <h1>React + Express (Single Dockerfile)</h1>
      <p>API says: <strong>{msg}</strong></p>
    </div>
  );
}

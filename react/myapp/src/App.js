import React from 'react';
import Colors from './components/color/colors'
import Hello from './components/time/time';


export default function App() {
  return (
    <div>
      <strong>Display Date & Time</strong>
      <Hello />
      <Colors />
    </div>
  );
}
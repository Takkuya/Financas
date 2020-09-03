import React from 'react';
import { Header } from './components/Header'
import Saldo from './components/Saldo'
import History from '../src/components/History'

function App() {
  return (
    <div className="App">
      <Header />
      <Saldo />
      <History />
      {/* <Historico /> */}
    </div>
  );
}

export default App;

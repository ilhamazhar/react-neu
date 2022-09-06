// import './App.css';
import React from 'react';
import Tombol from './components/Tombol';
import Home from './Home';
import Welcome from './Welcome';

function App() {
  const nama = 'Sarah'
  const umur = 12
  return (
    <>
    <Home />
    <Welcome name={nama} umur={umur} alamat='Jln. Kaliurang No.109'/>
    <Welcome name='Angga'umur='22' alamat='Jln. Bantul No.10'/>
    <Tombol nilai='Kirim'/>
    <Tombol nilai='Save'/>
    <Tombol nilai='Update'/>
    <Tombol nilai='Delete'/>
    </>
  );
}

export default App;

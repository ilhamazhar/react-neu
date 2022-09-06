// import './App.css';
import React from 'react';

function Welcome({name, umur, alamat}) {
  console.log();
  return (
    <>
      <h1>Welcome <u>{name}</u>, umur anda: <u>{umur}</u> dan alamat di <u>{alamat}</u></h1>
    </>
  );
}

export default Welcome;

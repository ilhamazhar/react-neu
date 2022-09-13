import React, { useState } from "react";
import Card from "./components/Card";
import Tombol from "./components/Tombol";

const App = () => {
  const nama = ["Abas", "Anto", "Bani", "Mona"];
  const umur = [12, 14, 22, 21];
  const alamat = ["Jogja", "Bandung", "Surabaya", "Jakarta"];

  const [hitung, setHitung] = useState(1);

  return (
    <div className="App">
      <div className="columns">
        <Card nama={nama[0]} umur={umur[0]} alamat={alamat[0]} />
        <Card nama={nama[1]} umur={umur[1]} alamat={alamat[1]} />
        <Card nama={nama[2]} umur={umur[2]} alamat={alamat[2]} />
        <Card nama={nama[3]} umur={umur[3]} alamat={alamat[3]} />
      </div>
      <hr className="has-background-info" />
      <Tombol
        nilai="Kurang"
        warna="mx-3 button is-danger"
        diklik={() => setHitung(hitung - 1)}
      />
      {hitung < 0 ? setHitung(0) : hitung}
      <Tombol
        nilai="Tambah"
        warna="mx-3 button is-info"
        diklik={() => setHitung(hitung + 1)}
      />
      {hitung === 0 ? "Stop" : hitung % 2 === 0 ? "Genap" : "Ganjil"}
      {/* <button className="mx-3" onClick={() => setHitung(hitung - 1)}>
        -
      </button>
      {hitung < 0 ? setHitung(0) : hitung}
      <button className="mx-3" onClick={() => setHitung(hitung + 1)}>
        +
      </button>
      {hitung === 0 ? "None" : hitung % 2 === 0 ? "Genap" : "Ganjil"} */}
    </div>
  );
};

export default App;

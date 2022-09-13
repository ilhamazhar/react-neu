import React from "react";
import Home from "../pages/Home";
import Tombol from "./Tombol";

const Card = ({ nama, umur, alamat }) => {
  return (
    <div className="column">
      <Home nama={nama} umur={umur} alamat={alamat} />
      <div className="message">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores
          non animi sit id laboriosam quos hic reiciendis officia. Mollitia
          accusantium dolor sint nemo eligendi, cupiditate dolores nihil!
          Accusantium, cum.
        </p>
        <Tombol nilai="Selengkapnya" warna="mt-3 button is-info" />
      </div>
    </div>
  );
};

export default Card;

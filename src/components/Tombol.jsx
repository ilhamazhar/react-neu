import React from "react";

const Tombol = ({ nilai, warna, diklik }) => {
  console.log();
  return (
    <>
      <button className={warna} onClick={diklik}>
        {nilai}
      </button>
    </>
  );
};

export default Tombol;

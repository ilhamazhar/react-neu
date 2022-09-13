import React from "react";

const Welcome = ({ nama, umur, alamat }) => {
  console.log();
  return (
    <>
      <h1>
        Welcome {nama}, umur anda: {umur} dan alamat di {alamat}
      </h1>
    </>
  );
};

export default Welcome;

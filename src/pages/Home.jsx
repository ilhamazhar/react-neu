import React from "react";

const Home = (props) => {
  console.log(props);
  return (
    <>
      <article className="message is-info">
        <div className="message-header">
          <p>{props.nama}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          <p>Nama : {props.nama}</p>
          <p>Umur : {props.umur}</p>
          <p>Alamat : {props.alamat}</p>
        </div>
      </article>
    </>
  );
};

export default Home;

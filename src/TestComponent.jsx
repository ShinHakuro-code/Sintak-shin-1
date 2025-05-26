import React from "react";

function TestComponent() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "skyblue" }}>
        Pembelajaran Sintak H-1
      </h1>
      <hr />
      <p
        style={{
          textAlign: "center",
          fontStyle: "oblique",
          fontSize: "20px",
          color: "royalblue",
        }}
      >
        Nama: Muhammad Rizky <br />
        Ditulis pada Tanggal 19 Mei 2025
      </p>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <img
          src="src\assets\Wuthering Waves.jpg"
          alt="Wuthering Waves"
          style={{ width: "50%", height: "50%" }}
        />
        <video
          src="src\assets\bla bla bla ble ble ble blu blu blu 🗣️🔥‼️ - Layzzz (360p, h264).mp4"
          controls
          className="w-2/4 h-2/4"
        ></video>
      </div>
      <p
        style={{
          fontStyle: "italic",
          fontFamily: "cursive",
          fontSize: "20px",
          textAlign: "center",
          color: "blueviolet",
        }}
      >
        Halo perkenalkan nama saya Muhammad Rizky, ini adalah blog untuk latihan
        saja jadi tidak harus langsung bagus <br />
        <b>
          <i>Selamat Datang Di Blog Saya</i>
        </b>
      </p>
      <hr />
      <footer
        style={{ textAlign: "center", fontSize: "20px", fontStyle: "oblique" }}
      >
        Salam Wibu
      </footer>
    </div>
  );
}

export default TestComponent;

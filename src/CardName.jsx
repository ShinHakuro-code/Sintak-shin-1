import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

function CardName() {
  return (
    <>
      <div className="h-screen bg-sky-100 flex justify-center items-center">
        <div className="w-96 h-auto border-2  bg-white p-4">
          <div className="flex justify-center items-center flex-col">
            <img
              src="src\assets\Me.JPG"
              alt="Muhammad Rizky"
              className="w-35 h-35 rounded-full shadow-xl border-2"
            />
            <h1 className="text-xl font-bold font-mono mt-3">Muhammad Rizky</h1>
            <p className="font-mono">Mahasiswa</p>
          </div>
          <div className="mt-3">
            <p className="text-justify">
              Halo, Perkenalkan Nama Saya Muhammad Rizky. Saya seorang Mahasiswa
              di politeknik Negeri Sriwijaya Jurusan Manajemen D4.
            </p>
          </div>

          <LinkSocial
            text={"Instagram"}
            icon={<RiInstagramFill className="mr-1 text-emerald-300 size-6" />}
            link="https://www.instagram.com/"
          />
          <LinkSocial
            text="Facebook"
            icon={
              <RiFacebookCircleFill className="mr-1 text-fuchsia-300 size-6" />
            }
            link="https://www.facebook.com/"
          />
        </div>
      </div>
    </>
  );
}

export default CardName;

function LinkSocial(props) {
  return (
    <>
      <div className="mt-4 flex justify-center items-center">
        <a
          className=" bg-black text-white p-2 w-full rounded-lg text-center flex justify-center items-center gap-1"
          href={props.link}
          target="blank"
        >
          {props.icon} {props.text}
        </a>
      </div>
          
    </>
  );
}

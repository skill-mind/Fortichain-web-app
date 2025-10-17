"use client";
import { useState } from "react";
import Table from "./component/table";

export default function Page() {
  const [type, setType] = useState("researcher");
  if (true) {
    return (
      <div className=" w-full flex h-screen justify-center items-center text-center text-gray-text text-2xl md:text-[32px] border border-dark-border-gray rounded-[8px] bg-dark-gray">
        <h2 className="mx-auto h-fit md:p-28 p-2.5 max-w-3xl ">Coming Soon</h2>
      </div>
    );
  }
  return (
    <section>
      <div className="bg-dark-gray rounded-full p-1 w-fit mb-8 text-base">
        <button
          onClick={() => {
            setType("researcher");
          }}
          className={`${
            type === "researcher"
              ? " bg-dark-gray-pop border border-dark-gray-border"
              : ""
          } py-2 px-[18px] rounded-full `}
        >
          Researchers Ranking
        </button>
        <button
          onClick={() => {
            setType("validator");
          }}
          className={`${
            type === "validator"
              ? " bg-dark-gray-pop border border-dark-gray-border"
              : ""
          } py-2 px-[18px] rounded-full `}
        >
          Validators Ranking
        </button>
      </div>

      <h1 className="text-white mb-3 text-18">
        {type === "researcher" ? "Researchers Ranking" : "Validators Ranking"}
      </h1>
      <Table type={type} />
    </section>
  );
}

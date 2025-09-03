"use client";

import { useState } from "react";

export default function Rating() {
  const [rate, setRating] = useState(1);
  return (
    <div className="flex flex-wrap justify-between items-center">
      {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((num) => {
        return (
          <button
            className={`relative p-1 bg-gradient-to-r rounded-full ${
              rate == num
                ? " from-[#2AA479] to-[#103E13]"
                : "to-[#312F2F] from-[#212121]"
            }`}
            type="button"
            key={num}
            onClick={() => {
              setRating(num);
            }}
          >
            {/* <Input id="rate" type="radio" className="w-ful h-full opacity top-0 left-0 absolute"/> */}
            <span
              className={`${
                rate == num
                  ? "bg-gradient-to-r to-[#2AA479] from-[#103E13]"
                  : "bg-[#1C1C1C]"
              }  rounded-full w-12 h-12 grid place-content-center`}
            >
              {num}
            </span>
          </button>
        );
      })}
    </div>
  );
}

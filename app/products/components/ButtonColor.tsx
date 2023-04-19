"use client";

import { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import Link from "next/link";
import { SearchParamsType } from "../page";

export default function ButtonColor({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) {
  const [color, setColor] = useState("");

  return (
    <>
      <div className="flex gap-2">
        <Link
          href={{
            pathname: "/products",
            query: {
              ...searchParams,
              color: undefined,
            },
          }}
        >
          <h1
            onClick={() => setColor("")}
            className={`font-semibold cursor-pointer opacity-50  ${
              color === "" ? "border-b-2 border-gray-600 opacity-100" : ""
            }`}
          >
            All
          </h1>
        </Link>

        <Link
          href={{
            pathname: "/products",
            query: {
              ...searchParams,
              color: "ff0000",
            },
          }}
        >
          <div onClick={() => setColor("#ff0000")} className="relative w-6 h-6">
            <button
              className={`w-full h-full rounded-full bg-[#ff0000] opacity-50 ${
                color === "#ff0000" ? "opacity-100" : ""
              }`}
            ></button>
            {color === "#ff0000" && (
              <IoCheckmarkSharp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-white cursor-pointer" />
            )}
          </div>
        </Link>

        <Link
          href={{
            pathname: "/products",
            query: {
              ...searchParams,
              color: "00ff00",
            },
          }}
        >
          <div onClick={() => setColor("#00ff00")} className="relative w-6 h-6">
            <button
              className={`w-full h-full rounded-full bg-[#00ff00] opacity-50 ${
                color === "#00ff00" ? "opacity-100" : ""
              }`}
            ></button>
            {color === "#00ff00" && (
              <IoCheckmarkSharp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-white cursor-pointer" />
            )}
          </div>
        </Link>

        <Link
          href={{
            pathname: "/products",
            query: {
              ...searchParams,
              color: "0000ff",
            },
          }}
        >
          <div onClick={() => setColor("#0000ff")} className="relative w-6 h-6">
            <button
              className={`w-full h-full rounded-full bg-[#0000ff] opacity-50 ${
                color === "#0000ff" ? "opacity-100" : ""
              }`}
            ></button>
            {color === "#0000ff" && (
              <IoCheckmarkSharp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-white cursor-pointer" />
            )}
          </div>
        </Link>

        <Link
          href={{
            pathname: "/products",
            query: {
              ...searchParams,
              color: "000",
            },
          }}
        >
          <div onClick={() => setColor("#000")} className="relative w-6 h-6">
            <button
              className={`w-full h-full rounded-full bg-[#000] opacity-50 ${
                color === "#000" ? "opacity-100" : ""
              }`}
            ></button>
            {color === "#000" && (
              <IoCheckmarkSharp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-white cursor-pointer" />
            )}
          </div>
        </Link>

        <Link
          href={{
            pathname: "/products",
            query: {
              ...searchParams,
              color: "ffb900",
            },
          }}
        >
          <div onClick={() => setColor("#ffb900")} className="relative w-6 h-6">
            <button
              className={`w-full h-full rounded-full bg-[#ffb900] opacity-50 ${
                color === "#ffb900" ? "opacity-100" : ""
              }`}
            ></button>
            {color === "#ffb900" && (
              <IoCheckmarkSharp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-white cursor-pointer" />
            )}
          </div>
        </Link>
      </div>
    </>
  );
}
